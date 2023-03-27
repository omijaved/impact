import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    height: 60,
    width: 60,
    marginLeft: '30px',
    cursor: "pointer",
  },
  csvDownloadWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }
})

export default useStyles
