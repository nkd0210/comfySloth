import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import logo2 from "../assets/Comfy-Cozy-Logo.jpg"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const {isAuthenticated} = useUserContext();
  
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <img src={logo} alt="comfy sloth" /> */}
              <img className="logo" src={logo2} alt="cozy and comfy"/>
          </Link>
          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li  key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {isAuthenticated && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 125px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .logo {
    /* font-size: 22px; */
    font-weight: 700;
    color: hsl(21.3, 31.1%, 52.2%);
    transition: transform 0.3s linear;
    
  }

  .logo:hover {
    color: var(--clr-primary-7);
    transform: scale(1.2);
  }

  .nav-links {
    display: none;
  }
  .nav-links li {
    transition: transform 0.3s linear;
  }
  .nav-links li:hover {
    transform: scale(1.2);
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
          color: var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
