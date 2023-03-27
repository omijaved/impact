import getResponse from "../utils/axios";

const userRecipients = async (args) => {
  try {
    const data = await getResponse({
      method: "POST",
      url: `/users/filtered-scan-recipients`,
      data: args
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default userRecipients
