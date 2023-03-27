import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { makeStyles } from '@material-ui/core'
import TABLE_ACTIONS from '../actions/table'
import Checkbox from './Checkbox'

const useStyles = makeStyles({
  root: {
    flexDirection: 'column-reverse !important',
    '& .MuiDataGrid-cellCheckbox': {
      justifyContent: 'flex-start !important',
      '& .textField': {
        display: 'none'
      }
    }
  }
})

const RECORDS_PER_PAGE = [20, 50, 100]

const DataTable = ({ state, dispatch, columns }) => {
  const handleSortChange = (event) => {
    if(event.length <= 0) event.push({ sort: '', field: '' })

    dispatch({ type: TABLE_ACTIONS.SET_ORDER, payload: event[0]?.sort })
    dispatch({ type: TABLE_ACTIONS.SET_ORDERBY, payload: event[0]?.field })
    dispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: true })
  }

  const pageFunctions = (type, dispatch, page) => {

    if(type === TABLE_ACTIONS.SET_PAGE) {
      dispatch({ type: TABLE_ACTIONS.SET_PAGE, payload: (page + 1) })
    } else {
      dispatch({ type: TABLE_ACTIONS.SET_PAGE_SIZE, payload: (page) })
    }
    dispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: true })
  }

  const onSelectionModelChangeHandler = (ids) => {
    return ids.map((id) => state.rows.find((row) => row.id === id).id)
  }

  const classes = useStyles()

  return (
    <DataGrid
      className={classes.root}
      rows={state.rows}
      columns={columns}
      pageSize={state.pageSize}
      rowsPerPageOptions={RECORDS_PER_PAGE}
      checkboxSelection
      onSortModelChange={handleSortChange}
      pagination
      paginationMode="server"
      sortingMode='server'
      rowCount={state.rowCount}
      page={state.page - 1}
      onPageChange={(page) => {pageFunctions(TABLE_ACTIONS.SET_PAGE, dispatch, page)}}
      onPageSizeChange={(newPageSize) => pageFunctions(TABLE_ACTIONS.SET_PAGE_SIZE, dispatch, newPageSize)}
      onSelectionModelChange={(newSelection) => {
        let selectedRows = onSelectionModelChangeHandler(newSelection)
        dispatch({ type: TABLE_ACTIONS.SET_SELECTED_ROWS, payload: selectedRows })
      }}
      components={{ BaseCheckbox: Checkbox }}
    />
  );
}

export default DataTable
