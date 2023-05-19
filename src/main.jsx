import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login&SingUp/Login';
import SignUp from './pages/Shared/Login&SingUp/SignUp';
import Blog from './pages/Blog/Blog';
import AuthProvider from './provider/AuthProvider';
import MyToys from './pages/Shared/MyToys/MyToys';
import AddAToy from './pages/Shared/AddAToy/AddAToy';
import AllToys from './pages/Shared/AllToys/AllToys';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PrivateRoutes from './routes/PrivateRoutes';
import Car from './pages/Cars/Car';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "alltoys/:id",
        element: <PrivateRoutes><Car></Car></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://toytopia-server-nine.vercel.app/allToys/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "myToys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: "addAToy",
        element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
