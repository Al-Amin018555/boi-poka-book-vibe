import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Root from "./Components/Root/Root.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import BookDetail from "./Components/BookDetail/BookDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('booksData.json'),
        element: <BookDetail></BookDetail>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);