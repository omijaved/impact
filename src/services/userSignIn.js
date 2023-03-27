import getResponse from "../utils/axios"

const getUser = async (token, userData) => {
  let user = await getResponse({
    method: "POST",
    url: '/users/sign-in',
    headers: { // Will be moved to axios utils once token iws moved to global 
      'Authorization': token
    },
    data: {
      username: userData.username
    }
  })
  return user
}

export default getUser
