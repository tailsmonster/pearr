import { createBrowserRouter } from "react-router-dom";

import App from "../App";
// here is we import our pages
import Home from "../pages/Landing";
import About from "../pages/About";
// ...
import PageNotFound from "../pages/404.tsx";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {path: "", element: <Home/>},
        {path: "/about", element: <About/>},
        // etc etc
        {path:"*", element: <PageNotFound/>}
      ]
    }
  ],
)