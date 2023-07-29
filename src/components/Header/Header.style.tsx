import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid #444;

  ul {
    display: flex;
    align-items: center;

    a {
      display: block;
      padding: 20px 10px;
      color: #888;

      &:hover {
        font-weight: 400;
        color: #f1f1f1;
      }
    }
  }

  h1 {
    font-size: 1rem;
    color: #888;
  }
`;
