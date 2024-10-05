import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import CEP from './Components/CEP.jsx'
import Corretoras from './Components/Corretoras.jsx'
import Salvos from './Components/Salvos.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {path: "", element: <Home/>, children: [
    {path: "", element: <Corretoras/>},
    {path: "cep", element: <CEP/>},
    {path: "salvos", element: <Salvos/>}
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
