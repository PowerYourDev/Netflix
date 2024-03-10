import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import FullVideo from "./components/FullVideo"
import MyList from  "./components/myList"

import MoviesBrowse from './components/MoviesBrowse'
// import Tvsowh from './pages/TvShows'
// import Home from './pages/Home'

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
      },
      {
        path:"/tv-shows",
        element:<MoviesBrowse/>,
      },
      {
        path:"/movies",
        element:<MoviesBrowse/>,
      },
      {
        path:"/my-lists",
        element:<MyList/>,
      },
      {
        path:"/new-popular",
        element:<MoviesBrowse/>,
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
    <RouterProvider router={appRouter}/>
   </>
  )
}

export default App