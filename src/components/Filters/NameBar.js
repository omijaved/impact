import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import BoxModel from "../../generics/BoxModel";
import DividerRule from "../../generics/DividerRule";
import GridStructure from "../../generics/GridStructure";
import Text from "../../generics/Text"
import useStyles from "./styles";
import FilterChip from "./FilterChip";

const NameBar = ({title, selection, type, dispatch, open, setOpen}) => {
  const toggle = () => setOpen(!open);
  const classes = useStyles()

  return (
    <BoxModel
        tabIndex={0}
        role="button"
        onClick={toggle}
        className={classes.divider}
      >
        <DividerRule />
        <BoxModel>
          <GridStructure container>
            <GridStructure item xs={4.5} className={classes.filterText}>
              <Text>{title}</Text>
            </GridStructure>
            <FilterChip 
              selection={selection}
              type={type}
              dispatch={dispatch}
              open={open}
            /> 
            <GridStructure item xs={3}>
              {open && <MinimizeIcon sx={{ mt: 0.5 }} />}
              {!open && <AddIcon sx={{ mt: 1.5 }} />}
            </GridStructure>
          </GridStructure>
        </BoxModel>
      </BoxModel>
  )
}

export default NameBar
