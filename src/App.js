import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./features/pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./features/pages/LoginPage";
import SignUpPage from "./features/pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>
  },
]);

function App(){
  return(
    <div className="App">
      <RouterProvider router={router} />
    </div>
    // createRoot(document.getElementById("root")).render(
      
    );
}

export default App;
