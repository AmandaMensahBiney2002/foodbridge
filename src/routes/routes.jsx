import Dashboard from "../pages/Dashboard";
import FoodListings from "../pages/FoodListings";
import EditFoodListing from "../pages/EditFoodListing";
import FoodRequests from "../pages/FoodRequests";
import RequestFood from "../pages/RequestFood";
import CreateFoodListing from "../pages/CreateFoodListing";
import Profile from "../pages/Profile";
import PublicProfile from "../pages/PublicProfile";
import VerifyEmail from "../pages/VerifyEmail";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: false,
  },
  {
    path: "/about",
    element: <About />,
    auth: false,
  },
  {
    path: "/contact",
    element: <Contact />,
    auth: false,
  },
  {
    path: "/login",
    element: <Login />,
    auth: false,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    auth: false,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    auth: false,
  },
  {
    path: "/signup",
    element: <SignUp />,
    auth: false,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
    auth: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    auth: true,
  },
  {
    path: "/profile",
    element: <Profile />,
    auth: true,
  },
  {
    path: "/profile/:id",
    element: <PublicProfile />,
    auth: false,
  },
  {
    path: "/food-listings",
    element: <FoodListings />,
    auth: true,
  },
  {
    path: "/food-requests",
    element: <FoodRequests />,
    auth: true,
  },
  {
    path: "/food-listings/:id/request",
    element: <RequestFood />,
    auth: true,
  },
  {
    path: "/food-listings/new",
    element: <CreateFoodListing />,
    auth: true,
  },
  {
    path: "/food-listings/:id/edit",
    element: <EditFoodListing />,
    auth: true,
  },
];

export default routes;