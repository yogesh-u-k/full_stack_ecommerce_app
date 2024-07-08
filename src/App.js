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
import { Cart } from "./features/cart/Cart";
import CartPage from "./features/pages/CartPage";

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
  {
    path: "/cart",
    element: <CartPage/>
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
