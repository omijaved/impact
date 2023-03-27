import getResponse from "../utils/axios";

const userAccounts = async (args) => {
  try {
    const accounts = await getResponse({
      method: "POST",
      url: "/users/filtered-accounts",
      data: args
    })
    return accounts
  } catch(error) {
    throw new Error(error)
  }
}

export default userAccounts
