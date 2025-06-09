import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import axios from "axios";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => axios(`${import.meta.env.VITE_SERVER_URL}/rooms`),
                Component: Rooms
            },
            {
                path: 'room/:id',
                loader: ({params})=> axios(`${import.meta.env.VITE_SERVER_URL}/room/${params.id}`),
                Component: RoomDetails
            },
            {
                path: 'my_bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
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