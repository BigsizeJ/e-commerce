import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useStore } from "../hooks/customHooks";

const Navbar = () => {
  const { cart } = useStore();
  const [showCart, setShowCart] = useState<boolean>(false);
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
            <button className="cart" onClick={() => setShowCart(true)}>
              {cart.length >= 1 && (
                <div className="cart-prod-length">
                  <p>{cart.length}</p>
                </div>
              )}
              <FaShoppingCart />
            </button>
          </li>
        </ul>
        <AnimatePresence mode="wait">
          {showCart && <Cart props={{ showCart, setShowCart }} />}
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
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50px;
          background-color: whitesmoke;
          transition: transform 200ms ease-in-out;
          position: relative;
          cursor: pointer;
          .cart-prod-length {
            display: flex;
            align-items: center;
            justify-content: center;
            inset: 0 0 0 0;
            transform: translateX(-8px) translateY(30px);
            position: absolute;
            background-color: #00ffd1;
            width: 30px;
            height: 30px;
            font-family: PoppinsBold;
            font-size: 1rem;
            border-radius: 50%;
          }
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
