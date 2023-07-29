import styled from "styled-components";

export const CousesStyle = styled.section`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  border-top: 1px solid #444;
  border-bottom: 1px solid #444;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  div {
    text-align: start;
    background: #111;
    padding: 20px;
    width: auto;

    h1 {
      font-size: 1rem;
      margin-bottom: 20px;
      margin-top: 0px;
    }
    p {
      margin-bottom: 5px;
      color: #888;
    }
  }
`;
