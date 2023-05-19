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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
