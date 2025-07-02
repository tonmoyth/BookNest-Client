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
import ErrorPage from "../Components/404page/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component:MainLayout,
        ErrorBoundary: ErrorPage,
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
                path: 'gallery',
                Component: Gallery
            },
            {
                path:'blog',
                Component:Blog
            },
            {
                path: 'blog/:id',
                Component:BlogDetails,
                loader:() => fetch('/blog.json')
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