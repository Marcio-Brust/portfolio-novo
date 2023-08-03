import { createGlobalStyle } from "styled-components";

export const GlobalStyd = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;
    color:#444;
  }
  body{
    background: #111;
    margin: 0 20px;
    }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
    
  }

`;
