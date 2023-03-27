import axios from 'axios'
import { userPool } from '../Auth/utils/awsCognito'

axios.interceptors.response.use((response) => {
  return response
} , (error) => {
  if (error.response.data.statusCode === 401) {
    userPool.getCurrentUser()?.signOut()
    window.localStorage.removeItem("token")
    window.location.assign("/login")
  }
})

const getResponse = async (requestData) => {
  const BACKEND_API_URL = 'https://internalbackend-dev.clubpact.co'
  const { url } = requestData
  const token = JSON.parse(localStorage.getItem('token'))?.token
  return await axios(`${BACKEND_API_URL}${url}`, {
    headers: {
      'Authorization': token
  },
  ...requestData })
}

export default getResponse
