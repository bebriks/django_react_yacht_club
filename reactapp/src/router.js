import React from 'react';

import App from './App';
import Registration from './Registration';
import Sign from './Sign';

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
]);

export default router;