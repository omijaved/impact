import { useState, useEffect } from "react";
import { Stack, Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import GridStructure from "../../generics/GridStructure"
import BoxModel from "../../generics/BoxModel";
import FILTER_ACTIONS from "../../actions/filterbar";
import getObjectIds from "../../utils/objectFunctions";
import useStyles from "./styles";
import NameBar from "./NameBar";

const FILTERBAR_ACTIONS = [FILTER_ACTIONS.SET_SELECTED_RECIPIENT_LABELS,
                           FILTER_ACTIONS.SET_SELECTED_SCANNING_FLOW_LABELS, 
                           FILTER_ACTIONS.SET_SELECTED_ACCOUNT_LABELS]

const getItemAttributes = (item) => (
  item.flow ? item.flow : item.first_name + ' ' + item.last_name
)

const onClickHandler = (item, selection, dispatch, type) => {
  const isAvailableInList = selection?.find(selected => selected.id === item.id);
  if (!isAvailableInList) {
    return dispatch({type: type ,payload: [...selection, item] })
  }
  return dispatch({type: type ,payload: [...selection.filter(selected => selected.id !== item.id)] })
}

const isItemInSelection = (item, selection)  => {
  return (selection.find((current) => current.id === item.id))
}

const filterSelectedItems = (selection, items) => {
  return selection.filter((e) => getObjectIds(items).includes(e.id))
}

const FilterBar = ({ title, items, selection, type, dispatch }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (FILTERBAR_ACTIONS.includes(type)) {
      dispatch({ type: type, payload: filterSelectedItems(selection, items) })
    }
  }, [items])

  const classes = useStyles()

  return (
    <BoxModel className={classes.itemBox}>
      <NameBar
        title={title}
        selection={selection}
        type={type}
        dispatch={dispatch}
        open={open}
        setOpen={setOpen}
      />

      {open && (
        <Stack  className={classes.scanDataFilter}>
          {items.map((item) => (
            <GridStructure container className={classes.filterValuesGrid} key={item.id}>
              <GridStructure item xs={12}>
                <FormControlLabel
                  type="button"
                  label={getItemAttributes(item)}
                  control={
                    <Checkbox
                      checked={isItemInSelection(item, selection)}
                      onChange={() => setChecked(!checked)}
                      onClick={() => onClickHandler(item, selection, dispatch, type)}
                    />
                  }
                />
              </GridStructure>
            </GridStructure>
          ))}
        </Stack>
      )}
    </BoxModel>
  );
}

export default FilterBar
