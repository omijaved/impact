import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    filterBar: {
      paddingLeft: 10,
      marginTop: 10,
    },
    table: { 
      minHeight: "700px", 
      maxHeight: "800px", 
      paddingLeft: 15, 
      marginTop: 20
    },
    searchBar: {
      marginBottom: "10px"
    },
    root: {
      marginTop: 10
    }
}))

export default useStyles
