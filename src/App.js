import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './components/Login'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
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