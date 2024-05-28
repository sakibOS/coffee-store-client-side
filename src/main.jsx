import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Main from './components/Main/Main.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch('https://coffe-store-server-two-zeta.vercel.app/coffee')
      },
      {
        path:'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`https://coffe-store-server-two-zeta.vercel.app/coffee/${params.id}`)
        
      },
      {
        path:'/signUp',
        element:<SignUp> </SignUp>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch('https://coffe-store-server-two-zeta.vercel.app/user')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
