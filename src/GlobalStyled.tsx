import { createGlobalStyle } from "styled-components";

export const GlobalStyd = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
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
