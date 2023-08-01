import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Men from './components/Men';
import Women from './components/Women';
import Kids  from './components/Kids';
import Login from './components/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path : "/men",
    element :<Men />
  },
  {
    path : "/women",
    element :<Women />
  },
  {
    path : "/kids",
    element :<Kids />
  },
  {path : "/login",
element  :<Login/>}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

