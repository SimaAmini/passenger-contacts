import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "./pages/not-found";

const Home = lazy(() => import("./pages/home"));
const Detail = lazy(() => import("./pages/detail"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>loading</>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/contact/:id",
    element: (
      <Suspense fallback={<>loading</>}>
        <Detail />,
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
