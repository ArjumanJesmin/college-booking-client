import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import CollegeSection from "../Pages/Home/Home/CollegeSection/CollegeSection";
import DetailsInfo from "../Pages/Home/Home/DetailsInfo/DetailsInfo";
import AdmissionForm from "../Pages/Home/AdmissionForm/AdmissionForm";
import CollegeName from "../Pages/Home/Home/CollegeSection/CollegeName";
import MyCollege from "../Pages/Home/Home/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/Home/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/collegeSection',
        element: <CollegeSection />
      },
      {
        path: '/collegeName',
        element: <CollegeName />
      },
      {
        path: '/admissionForm',
        element: <AdmissionForm />
      },
      {
        path: '/myCollege',
        element: <MyCollege />
      },
      {
        path:"/myProfile",
        element: <MyProfile/>,
      },
      {
        path: '/detailsInfo/:id',
        element: <PrivateRoute><DetailsInfo /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://college-booking-server-one.vercel.app/colleges/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },

    ]
  },
  {
    path: '/*',
    element: <Error />
  },
]);