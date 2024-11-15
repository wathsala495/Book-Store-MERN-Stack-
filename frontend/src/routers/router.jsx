import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Orders from "../pages/Orders/Orders";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkoutpage from "../pages/books/Checkoutpage";
import SIngleBook from "../pages/books/SIngleBook";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element: <Home/>

        },
        {
          path:'orders',
          element:<Orders/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"cart",
          element:<CartPage/>
        },
        {
          path:'checkout',
          element:<Checkoutpage/>
        },
        {
          path:'books/:id',
          element:<SIngleBook/>
        }
      ]
    },
  ]);

  export default router;