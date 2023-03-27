import { useReducer } from "react";
import FILTER_ACTIONS from "../actions/filterbar";

const INITIAL_FILTERBAR_STATE = {
  recipients: [],
  flowItems: [],
  selectedFlows: [],
  accounts: [],
  selectedRecipients: [],
  selectedAccounts: [],
  date: [null, null],
  hasChanged: true
}

const filterbarReducer = (state = INITIAL_FILTERBAR_STATE, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_RECIPIENT_LABELS:
      return {
        ...state,
        recipients: action.payload
      }
    case FILTER_ACTIONS.SET_SCANNING_FLOW_LABELS:
      return {
        ...state,
        flowItems: action.payload
      }
    case FILTER_ACTIONS.SET_ACCOUNT_LABELS:
      return {
        ...state,
        accounts: action.payload
      }
    case FILTER_ACTIONS.SET_SELECTED_SCANNING_FLOW_LABELS:
      return {
        ...state,
        selectedFlows: action.payload
      }
    case FILTER_ACTIONS.SET_SELECTED_RECIPIENT_LABELS:
      return {
        ...state,
        selectedRecipients: action.payload
      }
    case FILTER_ACTIONS.SET_SELECTED_ACCOUNT_LABELS:
      return {
        ...state,
        selectedAccounts: action.payload
      }
    case FILTER_ACTIONS.SET_DATE:
      return {
        ...state,
        date: action.payload
      }
    case FILTER_ACTIONS.FETCH_FILTERS_DATA:
      return {
        ...state,
        hasChanged: action.payload
      }
  }
}

const useFilterbarReducer = () => {
  const [filterBarState, filterBarDispatch] = useReducer(filterbarReducer, INITIAL_FILTERBAR_STATE)
  return { filterBarState, filterBarDispatch }
}

export default useFilterbarReducer
