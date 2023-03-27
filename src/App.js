import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import RouterProvider from './providers/RouteProvider'
import Layout from './layouts/layout'
import { userPool } from './Auth/utils/awsCognito'
import sessionContext from './context/sessionContext'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [sessionState, setSessionState] = useState()
  const USER_SESSION = window.localStorage.getItem("token")
  const navigate = useNavigate()
  const theme = createTheme({
    palette: {
      background: {
        default: "#f2f2f2"
      }
    }
  })

  useEffect(() => {
    if (sessionState === false) {
      userPool.getCurrentUser()?.signOut()
      window.localStorage.removeItem("token")
      navigate('/login')
    } else if (USER_SESSION) {
      setSessionState(true)
    }
  }, [sessionState, USER_SESSION])

  return (
    <sessionContext.Provider value={{ sessionState, setSessionState }}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Layout sessionState={sessionState} setSessionState={setSessionState}>
            <RouterProvider />
          </Layout>
      </ThemeProvider>
    </sessionContext.Provider>
  )
}

export default App
