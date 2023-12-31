import { MenuMobileStyle } from "./MenuMobile.style";
import { ComponentProps } from "react";

type INavProps = ComponentProps<"nav"> & {
  media?: boolean;
  isVisible: boolean;
};

export const MenuMobile = ({
  isVisible,

  ...props
}: INavProps) => {
  return (
    <MenuMobileStyle aria-expanded={isVisible} {...props}>
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
