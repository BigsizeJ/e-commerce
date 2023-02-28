import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import axios from "axios";

interface Product {
  title: string;
  image: string;
  price: string;
}

const Product = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [subscribe, setSubscribe] = useState<boolean>(true);
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    const fetch = async () => {
      if (subscribe) {
        try {
          const product = await axios.get("https://fakestoreapi.com/products");
          const data = await product.data;
          setData(data);
          setLoading(false);
        } catch (error) {}
      }
    };
    fetch();

    return () => setSubscribe(false);
  });

  return (
    <Wrapper>
      <div className="prod-grid">
        {data &&
          data.map((prod) => (
            <div className="prod-item">
              <div className="prod-img">
                <img className="prod-img" src={prod.image} alt="" />
              </div>
              <div className="prod-hero">
                <p>{prod.title}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        {loading && (
          <ReactLoading
            type={"spinningBubbles"}
            color={"#000"}
            height={100}
            width={100}
            className="loading"
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 0px 50px 0px;
  position: relative;
  .loading {
    position: absolute;
    inset: 0 0 0 0;
    margin: auto;
  }
  .prod-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    grid-gap: 10px;
    .prod-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      flex-direction: column;
      border: 2px solid black;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      .prod-img {
        flex: 1;
        display: flex;
        padding: 20px;
        place-content: center;
        img {
          padding: 10px;
          width: 150px;
          aspect-ratio: 1/1;
        }
      }
      .prod-hero {
        gap: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        color: white;
        background-color: black;
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: Poppins;
          font-size: 1.2rem;
        }
        button {
          font-family: PoppinsBold;
          font-size: 1rem;
          border: none;
          background-color: white;

          cursor: pointer;
        }
      }
    }
  }
`;
export default Product;
