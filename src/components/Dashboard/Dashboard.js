import { useEffect } from "react";
import { GRID_CHECKBOX_SELECTION_COL_DEF } from "@mui/x-data-grid";
import GridStructure from "../../generics/GridStructure";
import { scanData } from "../../services/scanData";
import userRecipients from "../../services/userRecipients";
import userAccounts from "../../services/userAccounts";
import scanningFlows from "../../services/scanningFlows";
import TABLE_ACTIONS from "../../actions/table";
import FILTER_ACTIONS from "../../actions/filterbar";
import SEARCH_ACTIONS from "../../actions/searchBar";
import useTableReducer from "../../hooks/useTableReducers";
import useFilterbarReducer from "../../hooks/useFilterbarReducers";
import scanDataPayload from "../../utils/scanDataPayload";
import userRecipientsPayload from "../../utils/userRecipientsPayload";
import scanningFlowPayload from "../../utils/scanningFlowPayload";
import userAccountsPayload from "../../utils/userAccountsPayload";
import DataTable from "../../generics/Table";
import useSearchBarReducer from "../../hooks/useSearchBarReducer";
import TableHeader from './TableHeader';
import { ScanDataFilters } from "../Filters";
import useStyles from "./styles";

const SCAN_DATA_COLUMNS = [
  { ...GRID_CHECKBOX_SELECTION_COL_DEF, width: 200, headerAlign: 'left' },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'account', headerName: 'Account', width: 200 },
  { field: 'recipient', headerName: 'Recipient', width: 200 },
  { field: 'scanningFlow', headerName: 'Scanning Flow', width: 200 }
]

const Dashboard = () => {
  const { tableState, tableDispatch } = useTableReducer()
  const { filterBarState, filterBarDispatch } = useFilterbarReducer()
  const { searchState, searchDispatch } = useSearchBarReducer()
  const classes = useStyles()

  useEffect(() => {
    if (tableState.hasChanged || filterBarState.hasChanged || searchState.hasChanged) {
      scanData(scanDataPayload(tableState, filterBarState, searchState))
        .then((response) => {
          tableDispatch({ type: TABLE_ACTIONS.SET_ROWS, payload: response.data.response })
          tableDispatch({ type: TABLE_ACTIONS.SET_ROW_COUNT, payload: response.data.count })
          tableDispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: false })
          filterBarDispatch({ type: FILTER_ACTIONS.FETCH_FILTERS_DATA, payload: false })
          searchDispatch({ type: SEARCH_ACTIONS.FETCH_SEARCH_DATA, payload: false })
        })
      userRecipients(userRecipientsPayload(filterBarState))
        .then((response) => {
          filterBarDispatch({ type: FILTER_ACTIONS.SET_RECIPIENT_LABELS, payload: response.data.recipients })
        })
      scanningFlows(scanningFlowPayload(filterBarState))
        .then((response) => {
          filterBarDispatch({ type: FILTER_ACTIONS.SET_SCANNING_FLOW_LABELS, payload: response.data })
        })
      userAccounts(userAccountsPayload(filterBarState))
        .then((response) => {
          filterBarDispatch({ type: FILTER_ACTIONS.SET_ACCOUNT_LABELS, payload: response.data })
        })
    }
  }, [tableState.hasChanged, filterBarState.hasChanged, searchState.hasChanged])

  return (
    <GridStructure container>
      <GridStructure item className={classes.filterBar} xs={12} sm={4.8} md={3.4} lg={2.5} xl={2} >
        <ScanDataFilters
          state={filterBarState}
          dispatch={filterBarDispatch}
        />
      </GridStructure>
      <GridStructure className={classes.table} item xs={12} sm={7.2} md={8.6} lg={9.5} xl={10} >
      <TableHeader searchState={searchState} searchDispatch={searchDispatch} tableState={tableState} />
        <DataTable
          state={tableState}
          dispatch={tableDispatch}
          columns={SCAN_DATA_COLUMNS}
        />
      </GridStructure>
    </GridStructure>
  )
}

export default Dashboard
