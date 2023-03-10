import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../Types";
import ReactLoading from "react-loading";
import axios from "axios";
import styled from "styled-components";
import { useStore } from "../hooks/customHooks";

interface ID {
  id: string | null;
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(true);

  const { products } = useStore();

  useEffect(() => {
    const fetch = async () => {
      const data = products.filter(
        (prod: ProductType) => prod.id.toString() === id
      )[0];

      setProduct(data);
      setLoading(false);
    };
    fetch();

    return () => {};
  }, []);

  return (
    <Wrapper>
      {product && (
        <>
          <img src={product.image} alt="" />
          <p className="prod-title">{product.title}</p>
        </>
      )}
      {loading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#000"}
          height={100}
          width={100}
          className="loading"
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 50px;
  img {
    width: 300px;

    object-fit: cover;
  }
  .prod-title {
    font-family: Poppins;
    font-size: 1.5rem;
  }
`;

export default ProductPage;
