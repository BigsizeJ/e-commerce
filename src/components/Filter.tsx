import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface SearchProps {
  props: {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
  };
}

const Filter = ({ props }: SearchProps) => {
  return (
    <Wrapper>
      <input
        type={"search"}
        placeholder={"Search Product"}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60%;
  padding: 0px 20px;
  input {
    outline: none;
    padding: 1px 3px;
    font-size: 1.3rem;
    font-family: Poppins;
    border: none;
    border-bottom: 2px solid #e5e5e5;
    width: 100%;
  }
`;

export default Filter;
