import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React, {useState} from 'react';

import Name from"./components/Name";
import Gallery from"./components/Gallery";

const router = createBrowserRouter([
  
  {
    path: "",
    element: <Name/>
    // Name page (Name)
  },


  {  

    path: "/Main",
    element: <Gallery/>
    // Landing page (Gallery)

  },
]);

export default function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

