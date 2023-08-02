import { MouseEventHandler, useContext } from "react";
import { ButtonStyle } from "./Button.style";
import { MenuContext } from "../../Context/MenuContext";
import useMedia from "../../utils/hooks/useMedia";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button = ({}: ButtonProps) => {
  const mobile = useMedia("(max-width:50rem)");

  const { handleClick, isVisible } = useContext(MenuContext);

  return (
    <ButtonStyle
      aria-expanded={isVisible}
      style={{ display: mobile ? "flex" : "none" }}
      onClick={handleClick}
    ></ButtonStyle>
  );
};
