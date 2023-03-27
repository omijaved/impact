import { Routes, Route, Navigate } from 'react-router-dom'
import routes from '../routes'

const getRoutes = (routes) =>
  routes.map((route) => {
    if(route.route) {
      return <Route path={route.route} element={route.component} />
    }
    return null
  })

const RouterProvider = (props) => {
  return (
      <Routes>
        {getRoutes(routes(props))}
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
  )
}

export default RouterProvider
