
import './index.scss';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";// Example component
import NoMatch from "./components/not-found";
import { lazy, Suspense } from "react";
import { Loading } from "./components/loading";
export default function App() {
  const Layout =lazy(()=>import("./layout/layout"));
  const Services = lazy(()=>import("./pages/service"));
  const Discounts = lazy(()=>import("./pages/discounts"));
  const Profile = lazy(()=>import("./pages/profile"));

    const router = createBrowserRouter([
      {
        path: "/",
        element:(
        <Suspense fallback={<Loading/>}>
          <Layout/>
        </Suspense>),
        errorElement:<NoMatch/>,
        
        children: [
          {
            index:true,
            element:<Navigate to='services' replace />
          },
          {
            path: "services",
            element: (
            <Suspense fallback={<Loading/>}>
              <Services/>
            </Suspense>
          ), 
          },  
          {
            path: "discounts",
            element: (
              <Suspense fallback={<Loading/>}>
                <Discounts /> 
              </Suspense>
             
            ),
          },
          {
            path: "profile",

            element: (
              <Suspense fallback={<Loading/>}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
    ]);
  return <RouterProvider router={router} />;
}

