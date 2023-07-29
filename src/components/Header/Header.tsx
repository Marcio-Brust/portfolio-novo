import { HeaderStyle } from "./Header.style";

export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Marcio Wilson Brust</h1>
      <ul>
        <li>
          <a href="https://github.com/Marcio-Brust" target="_blanck">
            Github{" "}
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/marciobrust21/" target="_blanck">
            Instagram
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
      </ul>
    </HeaderStyle>
  );
};
