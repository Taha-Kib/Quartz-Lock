import React, { useRef, useState } from "react";
import "./Signin.css";

function Signin() {
  const [showError, setShowError] = useState(false);

  //You can use state here too but useRef is better
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSigninClick = () => {
    const isValidEmail =
      emailRef.current.value.length > 8 && emailRef.current.value.includes("@");
    const isValidPassword = passwordRef.current.value.length > 8;

    if (!isValidEmail || !isValidPassword) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      <div className="signin-container">
        <div className="signin-row">
          <div className="label-container">
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input id="email" type="text" ref={emailRef} />
          </div>
        </div>
        <div className="signin-row">
          <div className="label-container">
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-container">
            <input id="password" type="text" ref={passwordRef} />
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleSigninClick}>Signin</button>
        </div>
      </div>
      {showError && (
        <div className="error-message">
          <p>Please enter valid email and password</p>
        </div>
      )}
    </>
  );
}

export default Signin;
