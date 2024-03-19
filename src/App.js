import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from "react-toastify";



import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import FullVideo from "./components/FullVideo"
import MyList from  "./pages/myList"

import HomePage from './pages/Home';
import TvShows from './pages/TvShows';
import NewPopular from './pages/NewPopular';
import Children from './pages/children';


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
        element:<HomePage/>,
      },
      {
        path:"/tv-shows",
        element:<TvShows/>,
      },
      {
        path:"/movies",
        element:<HomePage/>,
      },
      {
        path:"/my-lists",
        element:<MyList/>,
      },
      {
        path:"/new-popular",
        element:<NewPopular/>,
      },
      {
        path:"/children",
        element:<Children/>,
      },
      {
        path:"/movie-playing/:id",
        element:<FullVideo/>,
      }
    ]
  }
  
])

const App = () => {
  return (

   <>
        <ToastContainer />
    <RouterProvider router={appRouter}/>
   </>
  )
}

export default App