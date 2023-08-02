import { NavStyle } from "./NavMenu.style";

export const NavMenu = () => {
  return (
    <>
      <NavStyle>
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
      </NavStyle>
    </>
  );
};
