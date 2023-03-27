import React from 'react'
import DateFilter from './DateFilter'
import BoxModel from '../../generics/BoxModel'
import FILTER_ACTIONS from '../../actions/filterbar'
import SubmitField from "../../generics/SubmitField";
import Text from '../../generics/Text'
import useStyles from './styles'
import FilterBar from "./FilterBar";

const ScanDataFilters = ({ state, dispatch }) => {
  const applyFilter = () => {
    dispatch({ type: FILTER_ACTIONS.FETCH_FILTERS_DATA, payload: true });
  }
  const classes = useStyles()

  return (
    <BoxModel className={classes.filterHeading}>
      <Text className="text-style">Filters</Text>
      <FilterBar
        title="Account"
        items={state.accounts}
        selection={state.selectedAccounts}
        state={state}
        dispatch={dispatch}
        type={FILTER_ACTIONS.SET_SELECTED_ACCOUNT_LABELS}
      />
      <FilterBar
        title="Recipient"
        items={state.recipients}
        selection={state.selectedRecipients}
        state={state}
        dispatch={dispatch}
        type={FILTER_ACTIONS.SET_SELECTED_RECIPIENT_LABELS}
      />
      <FilterBar
        title="Flows"
        items={state.flowItems}
        selection={state.selectedFlows}
        state={state}
        dispatch={dispatch}
        type={FILTER_ACTIONS.SET_SELECTED_SCANNING_FLOW_LABELS}
      />
      <DateFilter
        dispatch={dispatch}
        title="Date"
        selection={state.date}
        state={state}
      />
      <BoxModel className={classes.selectAllBtn}>
        <SubmitField 
          variant="contained"
          onClick={applyFilter}
        >
          Apply All
        </SubmitField>
      </BoxModel>
    </BoxModel>
  )
}

export default ScanDataFilters
