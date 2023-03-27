import { makeStyles } from '@material-ui/core';
import logo from "../PACTLogo.png"
import GridStructure from '../generics/GridStructure';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#282c34",
    minHeight: "91.7vh",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <GridStructure container className={classes.root} >
      <img src={logo} alt="logo" width='28%'/>
    </GridStructure>
  )
}

export default Home
