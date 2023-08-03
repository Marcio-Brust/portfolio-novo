import styled from "styled-components";

export const ProjectStyle = styled.section`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 50px 0;
  }

  section {
    display: grid;
    grid-template-columns: ${(prop) =>
      prop["aria-expanded"] ? "1fr" : "1fr 1fr 1fr"};
    max-width: 800px;
    margin: 0 auto;
    gap: 20px;

    div {
      width: 150px;
      height: 150px;
      display: grid;
      align-items: center;
      justify-self: center;
    }

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }
`;
