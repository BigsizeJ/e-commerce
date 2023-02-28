import styled from "styled-components";
import cover from "../assets/cover.png";
import highlight from "../assets/highlight.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useStore } from "../hooks/customHooks";
import { StoreAction } from "../context/StoreContext";

const Home = () => {
  const { dispatch } = useStore();
  useEffect(() => {
    const wave = document.querySelector(".wave") as HTMLElement;
    wave.style.display = "block";
    dispatch({ type: StoreAction.GET, payload: null });
    return () => {};
  }, []);

  return (
    <Wrapper
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="hero">
        <p>Best Online Store Of The Year</p>
        <h1>We don't do fashion, we are fashion</h1>
        <img className="highlight" src={highlight} />
        <Link to="/shop" className="goto">
          Shop now
        </Link>
      </div>
      <img className="cover" src={cover} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin: auto;
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
  .cover {
    pointer-events: none;
    width: 600px;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
    display: block;
    margin: 0 0 0 0;
    .highlight {
      display: none;
    }
    .hero {
      align-items: center;
      width: 100vw;
      padding: 60px 15px;
      p {
        font-size: 1rem;
      }
      h1 {
        text-align: center;
        font-size: 3rem;
      }
      .goto {
        margin-top: 40px;
        width: max-content;
      }
    }
    .cover {
      display: none;
    }
  }
`;

export default Home;
