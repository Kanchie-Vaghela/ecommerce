import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import ProductPage from './Pages/ProductsPage.jsx'
import CartPage from './Pages/CartPage.jsx'
import CheckoutPage from './Pages/CheckoutPage.jsx' 
import WishlistPage from './Pages/WishlistPage.jsx' 
import ProfilePage from './Pages/ProfilePage.jsx' 
import Layout from './Layout.jsx'

const routes = createBrowserRouter([
  {
        path: "/",
        element:<Layout/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"Login",
            element:<LoginPage/>
          },
          {
            path:"Signup",
            element:<SignupPage/>
          },
          {
            path:"Product",
            element:<ProductPage/>
          },
          {
            path:"Cart",
            element:<CartPage/>
          },
          {
            path:"Wishlist",
            element:<WishlistPage/>
          },
          {
            path:"Profile",
            element:<ProfilePage/>
          },
          {
            path:"Checkout",
            element:<CheckoutPage/>
          }
    
        ]
      }
])

const container = document.getElementById('root');
const root =  createRoot(container); 
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
