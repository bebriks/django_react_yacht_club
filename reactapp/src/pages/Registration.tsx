import React, { useEffect } from "react";

import logo from "../../src/img/logo.svg";
import "../reg-style.css";
import "bootstrap";

import usersApi from "../plugins/users-api";

function Registration() {
  //const { users, setUsers } = useState([])
  useEffect(() => {
    const getUSers = async () => {
      try {
        //const response = await usersApi.get('users');
        console.log(await usersApi.get("users"));
        //setUsers(response);
      } catch (error) {
        console.log("Error with api method!");
      }
    };

    getUSers();
  }, []);
  console.log()

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
            <input type="text" className="user-name" placeholder="Username" />
          </span>
          <span>
            <input
              type="password"
              className="password"
              placeholder="Password"
            />
          </span>
          <span>
            <input
              type="password"
              className="confirm-password"
              placeholder="Confirm password"
            />
          </span>
          <span>
            <input type="text" className="email" placeholder="E-mail" />
          </span>
        </form>
        <div className="reg-button-container">
          <button className="reg-button">Sign up</button>
        </div>
        <p>
          Have an account? <a href="/sign">Sign In</a>{" "}
        </p>
      </div>
    </section>
  );
}

export default Registration;
