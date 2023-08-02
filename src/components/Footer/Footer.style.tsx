import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: ${(prop) => (prop["aria-expanded"] ? "grid" : "flex")};
  justify-content: space-around;
  height: 100px;
  align-items: center;
  margin-top: 50px;
  border-top: solid 1px #444;
  font-weight: 700;
  
  p {
    color: #999;
  }
`;
