import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [cart, showCart] = useState<boolean>(false);
  return (
    <Wrapper>
      <nav>
        <Link to="/" className="logo">
          EXCLSV
        </Link>
        <ul>
          <li>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/about"}>About</Link>
            <button className="cart" onClick={() => showCart(true)}>
              <FaShoppingCart />
            </button>
          </li>
        </ul>
        <AnimatePresence mode="wait">
          {cart && <Cart props={{ cart, showCart }} />}
        </AnimatePresence>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: white;
    transition: transform 200ms ease-in-out;
    &:active,
    :hover {
      transform: scale(1.1);
    }
    @media (hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  nav {
    padding: 20px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    .logo {
      font-family: PoppinsBold;
      font-size: 2.5rem;
    }
    ul {
      width: 40%;
      li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .cart {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border: none;
          border-radius: 50px;
          background-color: whitesmoke;
          transition: transform 200ms ease-in-out;
          cursor: pointer;
          svg {
            pointer-events: none;
            color: black;
            font-size: 1.8rem;
          }
          @media (hover) {
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      a {
        font-size: 1.8rem;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    nav {
      padding: 0px;
      flex-direction: column;
      ul {
        width: 90%;
      }
    }
  }
`;

export default Navbar;
