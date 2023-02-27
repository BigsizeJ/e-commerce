import styled from "styled-components";

const Filter = () => {
  return (
    <Wrapper>
      <input type={"search"} placeholder={"Search Product"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60%;

  padding: 0px 20px;
  input {
    outline: none;
    padding: 1px 3px;
    font-size: 1.5rem;
    font-family: Poppins;
    border: none;
    border-bottom: 2px solid black;
    width: 100%;
  }
`;

export default Filter;
