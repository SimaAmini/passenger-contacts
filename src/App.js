import React from "react";
import { RouterProvider } from "react-router-dom";

import { Header } from "./components/header";
import { router } from "./router";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
