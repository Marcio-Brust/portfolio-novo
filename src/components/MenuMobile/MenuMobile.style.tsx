import styled from "styled-components";

export const MenuMobileStyle = styled.nav`
  display: ${(prop) => (prop["aria-expanded"] ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 60px;
  z-index: 1;
  background: #111;
  transition: 0.1s;
  animation: backwards 0.3s showMenu;

  @keyframes showMenu {
    from {
      margin-top: 0;
    }
    to {
      margin-top: 60px;
    }
  }

  a {
    padding: 20px 30px;
    display: block;
    color: #888;

    &:hover {
      color: #f1f1f1;
    }
  }
`;
