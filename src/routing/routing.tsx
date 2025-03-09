import {createBrowserRouter, RouteObject} from "react-router-dom";
import Root from "../Root/Root";
// import Home from '../pages/Home/Home';
import Register from "../pages/Register/Register";


const router: RouteObject[] = [
    {
        path: '/',
        element: <Root/>,
        children: [
            // {
            //     path: '',
            //     element: <Home />
            // }
        ]
    },
    {
        path: '/register',
        element: <Register />
    }
]


export default createBrowserRouter(router);