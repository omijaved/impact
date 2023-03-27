import getObjectIds from "./objectFunctions"

const scanningFlowPayload = (filterBarState) => ({
  accountIds: getObjectIds(filterBarState.selectedAccounts),
  recipientIds: getObjectIds(filterBarState.selectedRecipients)
})

export default scanningFlowPayload
