import { Chip }  from "@mui/material"
import GridStructure from "../../generics/GridStructure"
import Text from "../../generics/Text"
import useStyles from "./styles"
import FILTER_ACTIONS from "../../actions/filterbar";

const checkArrayLength = (array) => (
  array.length > 0 && array[0] !== null 
)

const checkFilterType = (type, dispatch) => {
  if(type === FILTER_ACTIONS.SET_DATE) {
    dispatch({type: type ,payload: [null,null] })
  } else {
    dispatch({type: type ,payload: [] })
  }
}

const FilterChip = ({selection, dispatch, type, open}) => {
  const classes = useStyles()
  const handleDelete = () => {
   checkFilterType(type, dispatch)
    dispatch({type: FILTER_ACTIONS.FETCH_FILTERS_DATA, payload: true })
  }

  return (
    <GridStructure item xs={4.5}>
      <Text className={classes.collapseChip}>
        {!open && checkArrayLength(selection) && (
          <Chip
            label={`${selection.length} Selected`}
            variant="outlined"
            size="small"
            onDelete={handleDelete}
          />
        )}
      </Text>
    </GridStructure>
  )
}

export default FilterChip
