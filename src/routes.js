import { Navigate } from "react-router-dom"
import HealthCheck from "./components/HealthCheck"
import Login from "./Auth/Login"
import ForgotPassword from "./Auth/ForgotPassword"
import ResetPassword from "./Auth/ResetPassword"
import Dashboard from "./components/Dashboard/Dashboard"
import ProtectedRoute from "./providers/ProtectedRoute"

const routes = (props)  => {
  return [
    {
      route: "/",
      component: (
        <ProtectedRoute >
          <Navigate to="/dashboard" />
        </ProtectedRoute>
      )
    },
    {
      route: "/login",
      component: <Login />
    },
    {
      route: "/healthcheck",
      component: <HealthCheck />
    },
    {
      route: "/forgotPassword",
      component: <ForgotPassword />
    },
    {
      route: "/resetPassword",
      component: <ResetPassword />
    },
    {
      route: "/dashboard",
      component: (
        <ProtectedRoute >
          <Dashboard />
        </ProtectedRoute>
      )
    }
  ]
}


export default routes
