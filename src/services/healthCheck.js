import getResponse from "../utils/axios"

const healthCheck = async () => {
  return await getResponse({
    method: 'Get',
    url: '/healthcheck'
  })
}

export default healthCheck
