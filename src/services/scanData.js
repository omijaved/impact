import getResponse from "../utils/axios";

export const scanData = async (args) => {
  const data =  await getResponse({
    method: "POST",
    url: '/users/scan-data',
    data: args
  })
  return data
}

export const csvData = async (scanGroupIds, includeDepth) => {
  const data = await getResponse({
    method: "POST",
    url: "/users/scan-data/csv",
    data: {
      ids: scanGroupIds,
      includeDepth,
    }
  })
  return data
}
