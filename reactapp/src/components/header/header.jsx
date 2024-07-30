import React, { useEffect } from "react";
import "../../style.css";
import logo from "../../img/logo.svg";
import user from "../../img/user.svg";

export const Header = () => {
  useEffect(() => {
    const buttonLight = document.querySelector(".theme-button-light");
    const buttonDark = document.querySelector(".theme-button-dark");

    const buttonSansSerif = document.querySelector(".font-button-sans-serif");
    const buttonSerif = document.querySelector(".font-button-serif");

    const handleLightClick = () => {
      buttonDark.classList.remove("active");
      buttonLight.classList.add("active");
      document.body.classList.remove("dark");
    };

    const handleDarkClick = () => {
      buttonLight.classList.remove("active");
      buttonDark.classList.add("active");
      document.body.classList.add("dark");
    };

    const handleSansSerifClick = () => {
      buttonSerif.classList.remove("active");
      buttonSansSerif.classList.add("active");
      document.body.classList.remove("serif");
    };

    const handleSerifClick = () => {
      buttonSansSerif.classList.remove("active");
      buttonSerif.classList.add("active");
      document.body.classList.add("serif");
    };

    buttonLight.addEventListener("click", handleLightClick);
    buttonDark.addEventListener("click", handleDarkClick);
    buttonSansSerif.addEventListener("click", handleSansSerifClick);
    buttonSerif.addEventListener("click", handleSerifClick);

    return () => {
      buttonLight.removeEventListener("click", handleLightClick);
      buttonDark.removeEventListener("click", handleDarkClick);
      buttonSansSerif.removeEventListener("click", handleSansSerifClick);
      buttonSerif.removeEventListener("click", handleSerifClick);
    };
  }, []);

  return (
    <header className="page-header">
      <div className="services">
        <div className="services-content">
          <a className="location" href="#">
            Сочи
          </a>
          <p className="caption">Тема</p>
          <ul className="theme-switcher">
            <li>
              <button className="theme-button-dark" type="button"></button>
            </li>
            <li>
              <button
                className="theme-button-light active"
                type="button"
              ></button>
            </li>
          </ul>
          <p className="caption">Шрифт</p>
          <ul className="fonts">
            <li>
              <button className="font-button-sans-serif active" type="button">
                А
              </button>
            </li>
            <li>
              <button className="font-button-serif" type="button">
                А
              </button>
            </li>
          </ul>
        </div>
      </div>
      <nav className="main-nav">
        <p className="logo">
          <img
            src={logo}
            width="64"
            height="68"
            alt="Логотип яхт-клуба Yacht Club"
          />
        </p>
        <ul className="site-navigation">
          <li className="site-navigation-item">
            <a href="#">Наш клуб</a>
          </li>
          <li className="site-navigation-item">
            <a href="#">Регаты</a>
          </li>
          <li className="site-navigation-item">
            <a href="#">Команда</a>
          </li>
          <li className="site-navigation-item">
            <a href="#">Обучение</a>
          </li>
          <li className="site-navigation-item">
            <a href="#">Новости</a>
          </li>
          <li className="site-navigation-item">
            <a href="#">Контакты</a>
          </li>
        </ul>
        <a className="signin" href="/registration">
          <img src={user} width="16" height="18" alt="Кабинет пользователя" />
        </a>
      </nav>
    </header>
  );
};
