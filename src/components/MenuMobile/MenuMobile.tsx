import { useContext } from "react";
import { MenuMobileStyle } from "./MenuMobile.style";
import { MenuContext } from "../../Context/MenuContext";

export const MenuMobile = () => {
  const { isVisible } = useContext(MenuContext);

  return (
    <MenuMobileStyle aria-expanded={isVisible}>
      {" "}
      <li>
        <a href="https://github.com/Marcio-Brust" target="_blanck">
          Github{" "}
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/m%C3%A1rcio-brust-b964501b7"
          target="_blanck"
        >
          Linkedin
        </a>
      </li>
    </MenuMobileStyle>
  );
};
