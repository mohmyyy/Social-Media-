import { useRef, useState } from "react";
import "./ForgotPassword.scss";
import { Link, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [message, setMessage] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  // const navigate = useNavigate();

  const forgotpasswordhandler = async (event) => {
    event.preventDefault();
    const emailId = emailRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC-H5S1Dc0YzTVN4v1gmRNN6j5Np8xmMU8",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: emailId,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Failed to change Password");
      } else {
        setMessage(() => "Successful");
      }
      emailRef.current.value = "";
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="forgotpassword">
      <div className="card">
        <div className="left">
          <h1>Forgot Password?</h1>
          <p>Don't worry we got you covered</p>
        </div>
        <div className="right">
          <Link to="/login">
            <CloseOutlinedIcon
              className="closeButton"
              onClick={() => setButtonClicked(() => true)}
            />
          </Link>
          <form onSubmit={forgotpasswordhandler}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter Your Registered Email Here"
              required
            />
            {!buttonClicked && <button> Get Link </button>}
            {buttonClicked && <p>{message} </p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
