import styled from "styled-components";
import cover from "../assets/image.png";
import { Link } from "react-router-dom";
import highlight from "../assets/highlight.png";

const Home = () => {
  return (
    <Wrapper>
      <div className="hero">
        <p>Best Online Store Of The Year</p>
        <h1>We don't do fashion, we are fashion</h1>
        <img className="highlight" src={highlight} />
        <Link to="/shop" className="goto">
          Shop now
        </Link>
      </div>
      <img src={cover} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  gap: 50px;
  .hero {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 500px;
    p {
      color: #7b7b7b;
      font-size: 1.5rem;
      font-family: PoppinsBold;
      text-transform: uppercase;
    }
    h1 {
      font-size: 3.5rem;
      font-family: PoppinsBold;
    }
    .highlight {
      position: absolute;
      width: 45%;
      bottom: 90px;
    }

    .goto {
      margin-top: 20px;
      width: fit-content;
      text-decoration: none;
      color: white;
      background-color: black;
      font-family: PoppinsBold;
      padding: 15px 100px;
      font-size: 1.5rem;
      border-radius: 50px;
      transition: transform 200ms ease-in-out;
      @media (hover) {
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  img {
    width: 600px;
  }
`;

export default Home;
