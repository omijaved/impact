import { useCallback } from 'react'
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import getUser from "../services/userSignIn"
import { BEARER } from "../Constants"
import { userPool } from "./utils/awsCognito"

const getUserData = (username) => {
  return {
    Username: username,
    Pool: userPool
  }
}

export const useLogin = ({ setSessionState }) => {
  const navigate = useNavigate();
  return useCallback((data) => {
    const { username, password } = data
    const userData = getUserData(username)
    const newUser = new CognitoUser(userData)

    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    })

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: async (result) => {
          const jwtToken = result.getIdToken().getJwtToken()
          const token = BEARER + jwtToken
          const user = await getUser(token, data)
          setSessionState(true)
          const storageItem = {
            token: token,
            user: user.data
          }
          localStorage.setItem('token', JSON.stringify(storageItem))
          resolve(user.data)
          if (token && user.data) navigate("/dashboard")
        },
        onFailure: (error) => {
          reject(error)
        }
      })
    }).catch((error) => {
      toast.error(error.message)
      throw new Error(error)
    })
  })
}

export const useForgotPassword = () => {
  const navigate = useNavigate();
  return useCallback((data) => {
    const { username } = data
    const userData = getUserData(username)


    const newUser = new CognitoUser(userData)
    return new Promise((resolve, reject) => {
      return newUser.forgotPassword({
        onSuccess: (result) => {
          resolve(result)
          if(result) navigate("/resetPassword")
        },
        onFailure: (error) => {
          reject(error)
        }
      })
    })
    .catch((error) => {
      throw new Error(error)
    })
  })
}

export const useResetPassword = () => {
  const navigate = useNavigate()
  return useCallback((data) => {
    const { username, code, password } = data
    const userData = getUserData(username)
    const newUser = new CognitoUser(userData)

    return new Promise((resolve, reject) => {
      return newUser.confirmPassword(code, password, {
        onSuccess: () => {
          resolve(true)
          navigate("/login")
        },
        onFailure: (error) => {
          toast.error(error.message)
          reject(error)
        }
      })
    }).catch((error) => {
      throw new Error(error)
    })
  })
}
