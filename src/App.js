//-----------React-----------//
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//-----------Imports-----------//
import Home from "./Pages/Home";
import Sightings from "./Pages/Sightings";

//-----------Styling-----------//
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sightings/:sightingIndex",
      element: <Sightings />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
