import { useState } from "react";
import { loginUser } from "./initFirebase";

import AuthError from "./AuthError";
import "./Forms.css";

const Login = ({ goNextPage, updateUserId }) => {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [isRevealPwd, setisRevealPwd] = useState(false);

  async function authenticate(e) {
    e.preventDefault();
    const res = await loginUser(email, pword);
    //res is either user object or error object
    if (res.user?.uid) {
      localStorage.setItem("userId", res.user.uid);
      goNextPage("write"); //skip register page
      updateUserId(res.user.uid);
    } else {
      console.log("error logging in", res.code);
      setErrMessage(res.code);
    }
  }

  function hide_showPassword(e) {
    setisRevealPwd(!isRevealPwd);
  }

  return (
    <div>
      <form onSubmit={(e) => authenticate(e)} className="auth">
        <h2>Login</h2>
        <label htmlFor="email" className="email-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="password-label">
          Password
        </label>
        <input
          type={isRevealPwd ? "text" : "password"}
          onChange={(e) => setPword(e.target.value)}
        />
        {/* if true === eye open */}
        {/* if false === eye close */}
        {isRevealPwd ? (
          <i
            className="fa-regular fa-eye-slash"
            onClick={hide_showPassword}
          ></i>
        ) : (
          <i className="fa-regular fa-eye" onClick={hide_showPassword}></i>
        )}
        <button type="submit">Login</button>
      </form>
      {errMessage ? <AuthError errMessage={errMessage} /> : null}
    </div>
  );
};

export default Login;
