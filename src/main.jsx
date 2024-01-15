import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/home.jsx'
import Formp from './pages/form.jsx'
import Table from './pages/absen.jsx'

const router = createBrowserRouter([
  {
    path: "/new-learnsite/",
    element: <App/>,
    children: [
      {
        path: "/new-learnsite/",
        element: <Home/>
      },
      {
        path: "/new-learnsite/",
        element: <Formp/>
      },
      {
        path: "/new-learnsite/",
        element: <Table/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
