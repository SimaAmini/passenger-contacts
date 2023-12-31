import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
