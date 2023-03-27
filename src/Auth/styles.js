import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  inputField: {
   'padding': '10px 0px'
  },
  submitButton: {
    'padding': '20px 0px'
  },
  link: {
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  paper: {
    '& .MuiMenu-paper': {
      position: 'absolute',
      width: "340px",
    },
    '& .MuiTypography-root': {
      textAlign: 'center',
      padding: "15px"
    },
    '& .MuiDivider-root':{
      margin: "30px 0px"
    },
    '& .MuiBox-root': {
      marginBottom: "30px"
    }
  }
})

export default useStyles
