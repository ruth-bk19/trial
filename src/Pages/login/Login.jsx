import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { RiAppleFill } from "react-icons/ri";
import "./login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clientId =
    "22554673841-06jvt73bsrcmgf0vgil1kjrthj2udm96.apps.googleusercontent.com";
  const handleLoginFailure = (res) => {
    console.log("Login Failed");
  };
  const handleLoginSuccess = (res) => {
    console.log("login Success", res.profileObj);
  };

  return (
    <>
      <div className="FormMainDiv">
        <div className="logo font-bold">Logo</div>
        <div className="FormMainDivChild">
          <form class="form-container ">
            <div>
              <input type="Email" placeholder="Email"></input>
            </div>

            <div class="input-container">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>

            <button class="button0" type="submit">
              create
            </button>

            <div class="c">
              <hr className="line" /> <div class="text">continue with</div>{" "}
              <hr className="line" />
            </div>
            <div class="login-with-google">
              <GoogleLogin
                clientId={clientId}
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                className="button1 "
                type=""
              ></GoogleLogin>
              <button className="button2" type="">
                {" "}
                <RiAppleFill /> Apple
              </button>
              <div className="CreateAccountURL">
                <a href="#oo">
                  Already have an Account?
                  <span class="highlight">Create Account</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
