import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Speakers from "../pages/speakers/Speakers";
import Schedule from "../pages/schedule/Schedule";
import About from "../pages/about/about";
import Contact from "../pages/contact/Contact";
import Sponsors from "../pages/sponsors/Sponsors";

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
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
