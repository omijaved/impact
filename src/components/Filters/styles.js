import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  itemBox: {
    marginBottom: '22px',
    '& .MuiBox-root': {
      marginBottom: '15px'
    },
    '& .MuiDivider-root': {
      marginBottom: '10px',
      borderBottomWidth: 'revert',
      borderColor: "#282829ab"
    },
  },

  divider: {
    '& .MuiDivider-root': {
      marginBottom: '10px',
      borderBottomWidth: 'revert',
      borderColor: "#282829ab"
    },
    '& .MuiBox-root': {
      marginBottom: "15px"
    }
  },

  filterText: {
    '& .MuiTypography-root': {
      marginLeft: '9px',
      marginTop: '10px',
      fontSize: "18px",
      color: "rgb(58,65,74)"
    }
  },

  filterValuesGrid: {
    flexDirection: "column",
    '& .MuiGrid-root': {
      marginLeft: "13px"
    }
  },

  collapseChip: {
    '& .MuiButtonBase-root.MuiChip-root': {
      marginTop: "15px",
    }
  },

  logoDesign: {
    padding: "50px"
  },
  
  filterItems: {
    marginBottom: "15px"
  },

  dateInputs: {
    '& .MuiFormControl-root.MuiTextField-root': {
      marginLeft: "5px"
    },
    '& .MuiTypography-root': {
      margin: "0px 7px"
    },
    '& .MuiButtonBase-root.MuiButton-root': {
      marginTop: '10px',
      marginLeft: '10px'
    }
  },

  filterHeading: {
    '& .text-style' : {
      fontWeight: "bold",
      fontSize: "34px", 
      marginBottom: '25px',
      color: "rgb(58,65,74)"
    }
  },
  scanDataFilter: {
    maxHeight: 150, 
    overflowY: "scroll"
  }
}))

export default useStyles
