import getObjectIds from "./objectFunctions"

const isoDateFormat = (date) => {
  return date.toISOString().substring(0,10)
}

const checkDateArrayValidity = (array) => {
  return (array[0] && array[1])
}

const incrementDay = (date) => {
  let result = date
  result.setDate(date.getDate() + 1)
  return result
}

const scanDataPayload = (tableState, filterBarState, searchBarState) => ({
  userId: JSON.parse(localStorage.getItem('token')).user.id,
  pageNumber: tableState.page - 1,
  pageSize: tableState.pageSize,
  sortBy: tableState.orderBy,
  orderBy: tableState.order,
  filterData: {
    recipientIds: getObjectIds(filterBarState.selectedRecipients),
    scanningFlowIds: getObjectIds(filterBarState.selectedFlows),
    accountIds: getObjectIds(filterBarState.selectedAccounts),
    date: checkDateArrayValidity(filterBarState.date) ? [isoDateFormat(filterBarState.date[0]), isoDateFormat(incrementDay(filterBarState.date[1]))] : []
  },
  searchString: searchBarState.searchValue
})

export default scanDataPayload
