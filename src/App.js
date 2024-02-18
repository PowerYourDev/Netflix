import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



import Login from './components/Login'
import MoviesBrowse from './components/MoviesBrowse'
import ProtectedRoutes from './components/ProtectedRoutes'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    element:<ProtectedRoutes />,
    children:[
      {
        path:"/movies-browse",
        element:<MoviesBrowse/>,
      }
    ]
  }
  
])

const App = () => {
  return (

   <>
    <RouterProvider router={appRouter}/>
   </>
  )
}

export default App