import Login from "./Pages/Login/Login";
import "./style.scss";
import Register from "./Pages/Register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./components/Upload/Upload";
import EditProfile from "./Pages/EditProfile.js/EditProfile";
import MyProfile from "./Pages/Profile/MyProfile";
import { postActions } from "./store/redux-posts";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.isLoggedIn;
  console.log(auth);
  console.log(auth.hashedEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    const asynFun = async () => {
      let response = await fetch(
        `https://bloom-54dfc-default-rtdb.firebaseio.com/${auth.hashedEmail}/myposts.json`
      );
      let data = await response.json();
      console.log(data);
      let arrayOfPosts = [];
      for (let keys in data) {
        arrayOfPosts.unshift({ key: keys, ...data[keys] });
      }
      console.log(arrayOfPosts);
      dispatch(postActions.replace(arrayOfPosts));
    };
    try {
      asynFun();
    } catch (error) {
      alert(error);
    }
    return () => {
      dispatch(postActions.replace([]));
    };
  }, [auth.hashedEmail, dispatch]);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    // else if (currentUser) {
    //   return <Navigate to="/" />;
    // }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/myprofile/:currentuser",
          element: <MyProfile />,
        },
        {
          path: "/profile/:useremail",
          element: <Profile />,
        },
        {
          path: "/upload",
          element: <Upload />,
        },
        {
          path: "/editProfile",
          element: <EditProfile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
