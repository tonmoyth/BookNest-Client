import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyRooms from "../Pages/MyRooms/MyRooms";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component:MainLayout,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path: 'rooms',
                Component: Rooms
            },
            {
                path: 'my_rooms',
                element: MyRooms
            },
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: 'signup',
                Component: SignUp
            }
        ]
    }
])