import { makeStyles } from '@material-ui/core';
import GridStructure from "../generics/GridStructure"

const useStyles = makeStyles({
  root: {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh'
  }
})

const AuthLayout = ({children}) => {
  const classes = useStyles()
  return (
    <GridStructure container className={classes.root}>
      <GridStructure item xs={10} md={8} lg={4}>
        <GridStructure container spacing={2}>
          {children}
        </GridStructure>
      </GridStructure>
    </GridStructure>
  )
}

export default AuthLayout
