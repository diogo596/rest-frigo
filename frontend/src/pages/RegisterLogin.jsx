import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { success, error } from "../services/toast/toast";
import "../scss/RegisterLogin.scss";
import refrigerateur from "../assets/refrigerateur.png";

function RegisterLogin() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // Partie login
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, login, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.statusCode === 200) {
          success("Vous êtes connecté.");
        }
        navigate("/fridge");
      })
      .catch((err) => {
        const message = err.response?.data?.error || "Une erreur est survenue";
        setErrorMessage(message);
        console.error(err);
      });
  };

  // Partie register
  const [register, setRegister] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const handleChangeRegister = (e) => {
    e.preventDefault();
    if (e.target.name === "avatar") {
      setRegister({
        ...register,
        [e.target.name]: e.target.files[0],
      });
      return;
    }
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }
    const formData = new FormData();
    formData.append("pseudo", register.pseudo);
    formData.append("email", register.email);
    formData.append("password", register.password);
    formData.append("avatar", register.avatar);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, formData)
      .then((res) => {
        if (res.status === 200) {
          success("Votre compte a bien été créé.");
        }
        navigate("/fridge");
      })
      .catch((err) => {
        error("Une erreur est survenue.");
        console.error(err);
      });
  };

  return (
    <>
      <div className="header">
        <div className="contener-logo">
          <img src={refrigerateur} alt="refrigerateur" className="logo" />
          <div className="title">
            <p className="fridge">Fridge</p>
            <p className="rest">Rest</p>
          </div>
        </div>
        <div className="main-title">Trouver une recette !</div>
      </div>

      <div className="login-register">
        <div className="regiter">
          <div className="title">
            <p className="no-acounte">Je n'est pas de compte</p>
          </div>
          <div className="contener-input">
            <form
              className="form"
              action=""
              method="post"
              onSubmit={handleSubmitRegister}
            >
              <div className="label-container">
                <label htmlFor="pseudo" className="text-label">
                  Pseudo
                </label>
                <input
                  type="Username"
                  id="Username"
                  name="pseudo"
                  required
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="label-container">
                <label htmlFor="email" className="text-label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="label-container">
                <label htmlFor="Password" className="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="label-container">
                <label htmlFor="confirmPassword" className="password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="label-container">
                <label htmlFor="avatar" className="avatar">
                  Avatar
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  required
                  onChange={handleChangeRegister}
                />
              </div>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}{" "}
              <button className="register-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="login">
          <div className="title">
            <p className="fridge">J'ai déjà un compte</p>
          </div>
          <div className="contener-input">
            <form onSubmit={handleSubmitLogin} className="form">
              <div className="label-container">
                <label htmlFor="email" className="text-label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChangeLogin}
                  required
                />
              </div>
              <div className="label-container">
                <label htmlFor="password" className="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChangeLogin}
                  required
                />
              </div>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
              <button type="submit" className="button-login">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterLogin;
