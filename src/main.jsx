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
    path : "/home",
    element : <Home />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/communities",
    element : <Communities />
  },
  {
    path : "/register",
    element : <Register />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} /> 
  </StrictMode>,
)
