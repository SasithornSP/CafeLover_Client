import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    { path: '/', element: <h1>Home Cafe Lover</h1> },
    { path: '/menu', element: <h1>Menu</h1> },
]);

const AppRoutes = () => {
  return (
  <>
  <RouterProvider router={router} />
  </>
  );
};

export default AppRoutes;