import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/rootLayout/RootLayout";
import Home from '../pages/home/Home';
import SignUp from '../pages/signup/SignUp';
import LogIn from '../pages/login/LogIn';
import Quiz from '../pages/quiz/Quiz';
import Result from '../pages/result/Result';
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signup',
          element: (<PublicRouter><SignUp /></PublicRouter>),
        },
        {
          path: '/login',
          element: (<PublicRouter><LogIn /></PublicRouter>),
        },
        {
          path: '/quiz/:id',
          element: (<PrivateRoute><Quiz/></PrivateRoute>),
        },
        {
          path: '/result/:id',
          element: <Result />,
        },
      ],
    },
  ])
export default router;