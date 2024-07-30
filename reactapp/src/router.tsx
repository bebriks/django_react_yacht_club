import App from "./pages/App";
import Registration from "./pages/Registration";
import Sign from "./pages/Sign";

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
