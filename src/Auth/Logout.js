import { useState } from 'react'
import { Button, Dialog, Menu } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Avatar from '../Avatar.png'
import BoxModel from '../generics/BoxModel'
import DividerRule from '../generics/DividerRule'
import Text from '../generics/Text'
import useStyles from './styles'
import { userPool } from './utils/awsCognito'

const Logout = ({ username, email, setSessionState }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleLogout = (event) => {
    event.preventDefault()
    userPool.getCurrentUser().signOut()
    window.localStorage.removeItem('token')
    setAnchorEl(null)
    navigate('/login')
    setSessionState(false)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const classes = useStyles()

  return (
    <BoxModel>
      <img src={Avatar} alt='Avatar' onClick={handleClick} />
      <Dialog
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Menu
          id='basic-menu'
          className={classes.paper}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Text>{username}</Text>
          <Text>{email}</Text>
          <DividerRule />
          <BoxModel textAlign="center">
            <Button variant='outlined' onClick={handleLogout} color='info'>Logout</Button>
          </BoxModel>
        </Menu>
      </Dialog>
    </BoxModel>
  )
}

export default Logout
