import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from '../views/Root'
import Landing from '../views/Landing'
import Menu from '../views/Menu'
import Detail from '../views/Detail'
import Login from '../views/Login'
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Landing/>,
      },
      {
        path: '/menu',
        element: <Menu/>,
      },
      {
        path: '/menu/detail/:id',
        element: <Detail/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router

