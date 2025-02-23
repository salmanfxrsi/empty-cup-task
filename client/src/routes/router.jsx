import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Speakers from "../pages/speakers/Speakers";
import Schedule from "../pages/schedule/Schedule";
import About from "../pages/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "speakers",
        element: <Speakers />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
