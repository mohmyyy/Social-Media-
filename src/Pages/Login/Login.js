import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authentication";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const loginHandler = () => {
    login();
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
          <form>
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={loginHandler}>LogIn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
