import getObjectIds from "./objectFunctions"

const userAccountsPayload = (filterBarState) => ({
  scanningFlowIds: getObjectIds(filterBarState.selectedFlows),
  recipientIds: getObjectIds(filterBarState.selectedRecipients)
})

export default userAccountsPayload
