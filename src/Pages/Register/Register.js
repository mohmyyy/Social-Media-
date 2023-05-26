import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/redux-auth";

// const SignUpURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-H5S1Dc0YzTVN4v1gmRNN6j5Np8xmMU8";

const Register = () => {
  const [registerUsers, setRegisterUsers] = useState({
    name: "",
    // userName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userInputHandler = (event) => {
    setRegisterUsers({
      ...registerUsers,
      [event.target.name]: event.target.value,
    });
  };
  const registerFormHandler = async (event) => {
    event.preventDefault();
    setIsRegistered(() => true);
    console.log(registerUsers);
    let currentUserToken;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-H5S1Dc0YzTVN4v1gmRNN6j5Np8xmMU8",
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
      currentUserToken = data.idToken;
      if (!response.ok) {
        throw new Error("Registration Failed");
      } else {
        navigate("/");
        setTimeout(() => {
          alert("welcome to Bloom");
        }, 1000);
        dispatch(
          authAction.login({
            token: data.idToken,
            email: data.email,
            name: null,
          })
        );
      }
      setMessage(() => "User Registered...");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Bloom Media.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <span>Got an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={registerFormHandler}>
            {/* <input
              type="text"
              name="name"
              onChange={userInputHandler}
              placeholder="Name"
            /> */}
            {/* <input
              type="text"
              name="userName"
              onChange={userInputHandler}
              placeholder="Username"
            /> */}
            <input
              type="email"
              name="email"
              onChange={userInputHandler}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={userInputHandler}
              placeholder="Password"
            />
            {!isRegistered && <button>Register</button>}
            {isRegistered && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
