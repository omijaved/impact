import getResponse from "../utils/axios";

const scanningFlows = async (args) => {
  try {
    const data = await getResponse({
      method: "POST",
      url: '/scanning-flows/filter',
      data: args
    })
    return data;
  } catch (error) {
    throw new Error(error)
  }
}

export default scanningFlows
