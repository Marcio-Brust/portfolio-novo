import styled from "styled-components";

type IProject = {
  mobile: boolean | string | null;
};

export const ProjectStyle = styled.section<IProject>`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 50px 0;
  }

  section {
    display: grid;
    grid-template-columns: ${({ mobile }) => (mobile ? "1fr" : "1fr 1fr 1fr")};
    max-width: 800px;
    margin: 0 auto;
    gap: 20px;

    div {
      display: grid;
      place-items: center;
    }

    img {
      width: 250px;
      object-fit: contain;
      cursor: pointer;
    }
  }
`;
