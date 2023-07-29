import { createGlobalStyle } from "styled-components";

export const GlobalStyd = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto',sans-serif;
    color:#444;
  }
  body{
    background: #111;
    }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
    
  }

`;
