import { createGlobalStyle } from "styled-components";
import "./font/SUIT-Variable.css";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
    font-family: 'suit variable', sans-serif;
    margin:0;
    padding:0;
  }

  a {
    text-decoration:none;
    color: #767676;
  }

  button{
    border: none;
    background: inherit;
    outline: none;
  }
`;

export default GlobalStyle;
