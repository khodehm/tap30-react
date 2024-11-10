import Layout from "./layout/layout";
import Services from "./pages/service";
import Discounts from "./pages/discounts";
import Profile from "./pages/profile";
import './index.scss';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";// Example component
import NoMatch from "./components/not-found";
export default function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />, 
        errorElement:<NoMatch/>,
        children: [
          {
            index:true,
            element:<Navigate to='services' replace />
          },
          {
            path: "services", // or "home" if it's nested further
            element: <Services />, // This should show up in the Outlet
          },
          {
            path: "discounts", // or "home" if it's nested further
            element: <Discounts />, // This should show up in the Outlet
          },
          {
            path: "profile", // or "home" if it's nested further
            element: <Profile />, // This should show up in the Outlet
          },
        ],
      },
    ]);
  return <RouterProvider router={router} />;
}

