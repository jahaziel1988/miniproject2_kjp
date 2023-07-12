import React from "react";
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from"react-router-dom";
import Registration from "./Views/Registration/Registration";
import About from "./Views/About/About";
import Gallery from "./Views/Gallery/Gallery";
import LandingPage from "./Views/LandingPage/LandingPage";
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Profile from "./Views/Profile/Profile";

const router = createBrowserRouter ([
  { path: '/', element: <LandingPage /> },
  { path: 'registration', element: <Registration /> },
  { path: 'about', element: <About /> },
  { path: 'gallery', element: <Gallery /> },
  { path: 'home', element: <Home /> },
  { path: 'profile', element: <Profile /> },
  { path: 'login', element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
