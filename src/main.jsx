
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import Home from './components/Home.jsx'
import Login from './components/login.jsx'
import Communities from './components/communities.jsx'
import Register from './components/Register.jsx'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import { sampleVariable } from './context/context.js'
import { useContext } from 'react'

const router = createBrowserRouter([

  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path: "",
        element : <Home />
      } ,
      {
        path: "login",
        element : <Login />
      } ,
      {
          path : "communities",
          element : <Communities />
        },
        {
          path : "register",
          element : <Register />
        },
    ]

  },
  // {
  //   path : "/login",
  //   element : <><App /><Login /></>
  // },
  // {
  //   path : "/communities",
  //   element : <><App /><Communities /></>
  // },
  // {
  //   path : "/register",
  //   element : <><App /><Register /></>
  // },
  
])



createRoot(document.getElementById('root')).render(
  
    <sampleVariable.Provider  value={0}>      
    <RouterProvider router={router} /> 
    </sampleVariable.Provider>
)
