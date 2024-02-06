import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { PageHero } from "../components";
import { useUserContext } from "../context/user_context";

export default function Login() {
  const { loginBtn, logoutBtn } = useUserContext();
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }
  }, []);

  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.add("right-panel-active");
    }
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("right-panel-active");
    }
  };
  const handleCombineClick = () => {
    handleSignUpClick();
    loginBtn();
  };

  return (
    <main>
      {/* <PageHero title="login"/> */}
      <Wrapper className="page-100">
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="/facebook" class="social">
                  <i class="icon fa-brands fa-square-facebook"></i>
                </a>
                <a href="/instagram" class="social">
                  <i class="icon fa-brands fa-square-instagram"></i>
                </a>
                <a href="/twitter" class="social">
                  <i class="icon fa-brands fa-square-twitter"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="signUpBtn" onClick={handleCombineClick}>
                Sign Up
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1 onClick={handleSignInClick}>Sign in</h1>
              <div class="social-container">
                <a href="/facebook" class="social">
                  <i class="icon fa-brands fa-square-facebook"></i>
                </a>
                <a href="/instagram" class="social">
                  <i class="icon fa-brands fa-square-instagram"></i>
                </a>
                <a href="/twitter" class="social">
                  <i class="icon fa-brands fa-square-twitter"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button className="signInBtn" onClick={loginBtn}>
                Sign In
              </button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost signInBtn" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost signUpBtn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #ab7a5f;
    background-color: #ab7a5f;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: white;
    border-color: #ffffff;
    color: #ab7a5f;
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    margin: auto;
    /* margin-top: 80px ;
    margin-bottom: 88px; */
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ab7a5f, #ab7a5f);
    background: linear-gradient(to right, #ab7a5f, #ab7a5f);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
  }

  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }

  .social-container .icon {
    font-size: 1.6rem;
    color: #ab7a5f;
  }
  /* .signInBtn,.signUpBtn {
    transition: transform 0.3s ease-in-out;
  }
  .signInBtn:hover,
  .signUpBtn:hover {
    cursor: pointer;
    transform: translateY(15px);
  } */

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(0deg);
    }
    50% {
      transform: translateX(5px) rotate(0deg);
    }
    75% {
      transform: translateX(-5px) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  .social:hover {
    animation: shake 0.5s ease-in-out;
  }

  .signInBtn:hover,
  .signUpBtn:hover {
    animation: shake 0.5s ease-in-out;
  }
`;
