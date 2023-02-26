import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
            <button className="cart">
              <FaShoppingCart />
            </button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: white;
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
          border-radius: 50px;
          width: 60px;
          border: none;
          height: 60px;
          background-color: white;
          transition: transform 200ms ease-in-out;
          cursor: pointer;
          svg {
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
        li {
        }
      }
    }
  }
`;

export default Navbar;
