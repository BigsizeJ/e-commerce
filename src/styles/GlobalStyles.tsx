import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/Poppins.ttf";
import PoppinsBold from "../assets/PoppinsBold.ttf";

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: "Poppins";
        src: url(${Poppins}) format("truetype");
    }
    @font-face {
        font-family: "PoppinsBold";
        src: url(${PoppinsBold}) format("truetype");
    }
`;
