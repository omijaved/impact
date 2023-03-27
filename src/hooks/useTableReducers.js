import { useReducer } from "react";
import TABLE_ACTIONS from '../actions/table'

const INITIAL_TABLE_STATE = {
  rows: [],
  order: "ASC",
  orderBy: "date",
  page: 1,
  pageSize: 20,
  rowCount: 0,
  selectedRows: [],
  hasChanged: true
}

function tableReducer(state = INITIAL_TABLE_STATE, action) {
    switch (action.type) {
      case TABLE_ACTIONS.SET_ROWS:
        return {
          ...state,
          rows: action.payload
        };
      case TABLE_ACTIONS.SET_ORDER:
        return {
          ...state,
          order: action.payload
        };
      case TABLE_ACTIONS.SET_ORDERBY:
        return {
          ...state,
          orderBy: action.payload
        };
      case TABLE_ACTIONS.SET_PAGE:
        return {
          ...state,
          page: action.payload
        };

      case TABLE_ACTIONS.SET_PAGE_SIZE:
        return {
          ...state,
          pageSize: action.payload
        };
      case TABLE_ACTIONS.SET_ROW_COUNT:
        return {
          ...state,
          rowCount: action.payload
        };
      case TABLE_ACTIONS.SET_SELECTED_ROWS:
        return {
          ...state,
          selectedRows: action.payload
        }
      case TABLE_ACTIONS.FETCH_TABLE_DATA:
        return {
          ...state,
          hasChanged: action.payload
        }
    }
  }

const useTableReducer = () => {
  const [tableState, tableDispatch] = useReducer(tableReducer, INITIAL_TABLE_STATE)
  return {tableState, tableDispatch}
}

export default useTableReducer
