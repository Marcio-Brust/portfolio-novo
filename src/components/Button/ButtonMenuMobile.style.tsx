import styled from "styled-components";

type IButtonProps = {
  mobile: boolean | string | null;
  visible: boolean | string | null;
};

export const ButtonMenuMobileStyle = styled.button<IButtonProps>`
  background: #eee;
  border-radius: 0.2rem;
  height: 30px;
  width: 30px;
  padding: 0px;
  display: ${({ mobile }) => (mobile ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  z-index: 10;
  transform: ${({ visible }) => (visible ? "rotate(-90deg)" : "rotate(0deg)")};

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #777;
    border-color: #777;
    color: #777;
  }
`;
