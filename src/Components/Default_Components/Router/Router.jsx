import { createBrowserRouter } from "react-router-dom";
import Root from "../../HomeComponents/Root/Root";
import Home from "../../HomeComponents/Home/Home";
import HomeError from "../Error/HomeError";
import Apartment from "../../HomeComponents/Apartment/Apartment";
import Contact from "../../HomeComponents/Contact/Contact";
import Login from "../../HomeComponents/Authcation/Login";
import AuthRoot from "../../HomeComponents/Authcation/AuthRoot";
import DeshboardRoot from "../../Deshboard/AdminDeshboard/DeshboardRoot";
import UserDeshboardRoot from "../../Deshboard/UserDeshboard/UserDeshboardRoot";
import UserProfile from "../../Deshboard/UserDeshboard/UserProfile";
import AdminPRofile from "../../Deshboard/AdminDeshboard/AdminPRofile";
import Announcements from "../../Deshboard/UserDeshboard/Announcements/Announcements";
import Makepayment from "../../Deshboard/UserDeshboard/Makepayment/Makepayment";
import PaymentHistory from "../../Deshboard/UserDeshboard/PaymentHistory/PaymentHistory";
import ManageMembers from "../../Deshboard/AdminDeshboard/ManageMembers/ManageMembers";
import MakeAnnouncement from "../../Deshboard/AdminDeshboard/MakeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../../Deshboard/AdminDeshboard/AgreementRequests/AgreementRequests";
import ManageCoupons from "../../Deshboard/AdminDeshboard/ManageCoupons/ManageCoupons";
import SignUp from "../../HomeComponents/Authcation/SignUp";
import About from "../../HomeComponents/About/About";
import Private from "../Private/Private";
import AllCoupons from "../../HomeComponents/AllCoupons.jsx/AllCoupons";
import ContactMessage from "../../Deshboard/AdminDeshboard/ContactMessage/ContactMessage";
import AdminPrivate from "../Private/AdminPrivate";
import PaymentSystem from "../../Deshboard/UserDeshboard/Makepayment/PaymentSystem";
import AdminPaymentHistory from "../../Deshboard/AdminDeshboard/PaymentHistory/AdminPaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <HomeError></HomeError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appartment",
        element: <Apartment></Apartment>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allcoupons",
        element: <AllCoupons></AllCoupons>,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardRoot></DeshboardRoot>,
    children: [
      {
        path: "/adminDeshboard",
        element: (
          <AdminPrivate>
            <AdminPRofile></AdminPRofile>
          </AdminPrivate>
        ),
      },
      {
        path: "/ManageMembers",
        element: (
          <AdminPrivate>
            <ManageMembers></ManageMembers>
          </AdminPrivate>
        ),
      },
      {
        path: "/MakeAnnouncement",
        element: (
          <AdminPrivate>
            <MakeAnnouncement></MakeAnnouncement>
          </AdminPrivate>
        ),
      },
      {
        path: "/AgreementRequests",
        element: (
          <AdminPrivate>
            <AgreementRequests></AgreementRequests>
          </AdminPrivate>
        ),
      },
      {
        path: "/ManageCoupons",
        element: (
          <AdminPrivate>
            <ManageCoupons></ManageCoupons>
          </AdminPrivate>
        ),
      },
      {
        path: "/contactmessage",
        element: (
          <AdminPrivate>
            <ContactMessage></ContactMessage>
          </AdminPrivate>
        ),
      },
      {
        path: "/adminpaymenthistory",
        element: (
          <AdminPrivate>
            <AdminPaymentHistory></AdminPaymentHistory>
          </AdminPrivate>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <UserDeshboardRoot></UserDeshboardRoot>,
    children: [
      {
        path: "/userDeshboard",
        element: (
          <Private>
            <UserProfile></UserProfile>
          </Private>
        ),
      },
      {
        path: "/Announcements",
        element: (
          <Private>
            <Announcements></Announcements>
          </Private>
        ),
      },
      {
        path: "/Makepayment",
        element: (
          <Private>
            <Makepayment></Makepayment>
          </Private>
        ),
      },
      {
        path: "/paymentsystem",
        element: (
          <Private>
            <PaymentSystem></PaymentSystem>
          </Private>
        ),
      },
      {
        path: "/PaymentHistory",
        element: (
          <Private>
            <PaymentHistory></PaymentHistory>
          </Private>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthRoot></AuthRoot>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
