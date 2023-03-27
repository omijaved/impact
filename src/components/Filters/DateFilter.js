import { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import BoxModel from "../../generics/BoxModel";
import SubmitField from "../../generics/SubmitField"
import DividerRule from "../../generics/DividerRule";
import FILTER_ACTIONS from "../../actions/filterbar";
import Text from "../../generics/Text"
import useStyles from "./styles";
import NameBar from "./NameBar";

const DateFilter  = ({ selection, dispatch, title, state })  => {
  const [open, setOpen] = useState(false);
  const checkDateValue = (value) => (
    value?.length ? value : [null, null]
  )

  const onDateChange = (dispatch, type, newValue) => {
    dispatch({ type: type[0], payload: checkDateValue(newValue) })
  }

  const classes = useStyles()

  return (
    <BoxModel className={classes.itemBox}>
      <NameBar
        title={title}
        open={open}
        setOpen={setOpen}
        selection={selection}
        dispatch={dispatch}
        type={FILTER_ACTIONS.SET_DATE}
      />
      {open && (
        <BoxModel className={classes.dateInputs}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
          >
            <DateRangePicker
              size="small"
              calendars="1"
              disableFuture
              value={state.date}
              onChange={(newValue) => {onDateChange(dispatch, [FILTER_ACTIONS.SET_DATE, FILTER_ACTIONS.FETCH_FILTERS_DATA], newValue)}}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField size="small" {...startProps} />
                  <Text>to</Text>
                  <TextField size="small" {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
          {open && state.date[0] != null && (
            <SubmitField
              variant="contained"
              onClick={() => {onDateChange(dispatch, [FILTER_ACTIONS.SET_DATE, FILTER_ACTIONS.FETCH_FILTERS_DATA], [])}}
            >
              Clear
            </SubmitField>
          )}
        </BoxModel>
      )}
      <DividerRule />
    </BoxModel>
  );
}

export default DateFilter
