import React from "react";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Header } from "./components/header";
import { router } from "./router";
import { Error } from "./pages/error";

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={Error}>
        <Header />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
