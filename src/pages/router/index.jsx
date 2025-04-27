import { createBrowserRouter } from "react-router-dom";
import Home from "../home/index";
import SignIn from "../sign-in/index";
import SignUp from "../sign-up/index";
import PrivateRouter from "../../components/privaterouter";
export const router = createBrowserRouter([
    {
        path: "/",
        element : <PrivateRouter/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
        ],
    },
      {
        path: "/Sign-in",
        element: <SignIn />,
    },
      {
        path: "/Sign-up",
        element: <SignUp />,
    },
])  