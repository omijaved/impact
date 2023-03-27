import getObjectIds from "./objectFunctions"

const userRecipientsPayload = (filterBarState) => ({
  accountIds: getObjectIds(filterBarState.selectedAccounts),
  scanningFlowIds: getObjectIds(filterBarState.selectedFlows)
})

export default userRecipientsPayload
