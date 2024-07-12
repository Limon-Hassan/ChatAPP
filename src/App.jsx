import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ragistation from "./Pages/Ragistation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Ragistation/>,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
