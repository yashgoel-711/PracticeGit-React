import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import Login from './components/login.jsx'
import Communities from './components/communities.jsx'
import Register from './components/Register.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([

  {
    path : "/",
    element : <><App /><Home /></>
  },
  {
    path : "/login",
    element : <><App /><Login /></>
  },
  {
    path : "/communities",
    element : <><App /><Communities /></>
  },
  {
    path : "/register",
    element : <><App /><Register /></>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router} /> 
  </StrictMode>,
)
