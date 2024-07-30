import React from "react";
import logo from "../img/logo.svg";
import "../reg-style.css";

import usersApi from "../plugins/users-api";

function Sign() {
  return (
    <section className="registration">
      <div className="reg-window">
        <div className="logo">
          <a href="/">
            <img
              src={logo}
              width="84"
              height="88"
              alt="Логотип яхт-клуба Yacht Club"
            />
          </a>
        </div>
        <form className="reg-form">
          <span>
            <input type="text" className="email" placeholder="E-mail" />
          </span>
          <span>
            <input
              type="password"
              className="password"
              placeholder="Password"
            />
          </span>
        </form>
        <div className="reg-button-container">
          <button className="reg-button">Sign in</button>
        </div>
        <p>
          Have no account? <a href="/registration">Sign up</a>{" "}
        </p>
      </div>
    </section>
  );
}

export default Sign;
