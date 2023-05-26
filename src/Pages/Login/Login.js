import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/redux-auth";

const Login = () => {
  const [registerUsers, setRegisterUsers] = useState({
    email: "",
    password: "",
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  let content;
  const userInputHandler = (event) => {
    setRegisterUsers({
      ...registerUsers,
      [event.target.name]: event.target.value,
    });
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    if (emailInputRef.current.value.length === 0) {
      emailInputRef.current.focus();
      return;
    } else if (passwordInputRef.current.value.trim().length === 0) {
      passwordInputRef.current.focus();
      return;
    }
    setIsRegistered(() => true);
    console.log(registerUsers);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-H5S1Dc0YzTVN4v1gmRNN6j5Np8xmMU8",
        {
          method: "POST",
          body: JSON.stringify({
            email: registerUsers.email,
            password: registerUsers.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (!response.ok) {
        throw new Error("Login Failed");
      } else {
        navigate("/");
      }
      setMessage(() => "User Logged In...");
      dispatch(
        authAction.login({
          token: data.idToken,
          email: data.email,
          name: data.displayName,
        })
      );
    } catch (error) {
      alert(error);
    }
    setIsRegistered(() => false);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>LogIn</h1>
          <form onSubmit={loginHandler}>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              onChange={userInputHandler}
              placeholder="Email"
            />
            <input
              ref={passwordInputRef}
              type="password"
              name="password"
              onChange={userInputHandler}
              placeholder="Password"
            />
            <Link to="/forgotPassword">Forgot Password</Link>
            {!isRegistered && <button>Login</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
