import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import axios from "axios";
import { useStore } from "../hooks/customHooks";
import { StoreAction } from "../context/StoreContext";

interface Product {
  title: string;
  image: string;
  price: string;
  qty: number;
  id: string;
}

interface Prop {
  props: { search: string };
}

const Product = ({ props }: Prop) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [subscribe, setSubscribe] = useState<boolean>(true);
  const { products, cart, dispatch } = useStore();

  const addToCart = (product: Product) => {
    product.qty = 1;
    const isExisted = cart.filter(
      (prod: Product) => prod.title === product.title
    )[0];
    if (isExisted) {
      cart.map((prod: Product) => {
        if (prod.title === product.title)
          return { ...prod, qty: (prod.qty += 1) };
      });
    } else {
      dispatch({ type: StoreAction.ADD_TO_CART, payload: product });
    }
  };

  useEffect(() => {
    const fetch = async () => {
      if (products === null) setSubscribe(true);
      if (subscribe) {
        try {
          const product = await axios.get("https://fakestoreapi.com/products");
          const data = await product.data;
          dispatch({ type: StoreAction.GET, payload: data });

          setLoading(false);
        } catch (error) {}
      }
    };
    fetch();

    return () => setSubscribe(false);
  });

  const filteredSearchProducts = (products || []).filter((prod: Product) =>
    prod.title.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="prod-grid">
        {products &&
          filteredSearchProducts.map((prod: Product) => (
            <div className="prod-item" key={prod.id}>
              <div className="prod-img">
                <img className="prod-img" src={prod.image} alt="" />
              </div>
              <div className="divider"></div>
              <div className="prod-hero">
                <p>{prod.title}</p>
                <p className="prod-price">PHP {prod.price}</p>
                <button onClick={() => addToCart(prod)}>Add to cart</button>
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    grid-gap: 10px;
    .divider {
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
    }
    .prod-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      border: 1px solid #e5e5e5;
      border-radius: 10px;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        color: black;
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: Poppins;
          font-size: 1.2rem;
        }
        .prod-price {
          font-family: PoppinsBold;
        }
        button {
          margin-top: 5px;
          font-family: PoppinsBold;
          font-size: 1rem;
          border: none;
          padding: 5px;
          background-color: transparent;
          border: 1px solid black;
          color: black;
          cursor: pointer;
          transition: 200ms ease-in-out;
          &:hover {
            color: white;
            border: 1px solid transparent;
            background-color: black;
          }
          &:active {
            transform: scale(0.92);
          }
        }
      }
    }
  }
`;
export default Product;
