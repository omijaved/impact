import { Link } from 'react-router-dom'
import GridStructure from '../generics/GridStructure'
import BoxModel from '../generics/BoxModel'
import Logout from '../Auth/Logout'
import useStyles from "../components/Filters/styles"
import logo from '../Assets/pactlogo.png'

const userCredentials = () => localStorage.getItem('token')
const getUser = (token) => JSON.parse(token).user

const Header = ({ sessionState, setSessionState }) => {
  let user = null;
  const classes = useStyles()

  if (userCredentials()) {
   user = getUser(userCredentials())
  }

  return (
    <GridStructure container>
      <GridStructure item xs={6} textAlign='start'>
        <BoxModel className={classes.logoDesign}>
          <Link to="/">
            <img width='155' height='45' src={logo} alt='Impact Biosystems' />
          </Link>
        </BoxModel>
      </GridStructure>
      { (sessionState && user) &&
        <GridStructure item xs={6} textAlign='end'>
          <Logout
            username={user.first_name + ' ' + user.last_name}
            email={user.username}
            setSessionState={setSessionState}
          />
        </GridStructure>
      }
    </GridStructure>
  )
}

export default Header
