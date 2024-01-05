import { NavStyle } from "./NavMenu.style";

const links = [
  {
    link: "https://github.com/Marcio-Brust",
    value: "Github",
  },
  {
    link: "https://www.linkedin.com/in/m%C3%A1rcio-brust-b964501b7",
    value: "Linkedin",
  },
];

export const NavMenu = () => {
  return (
    <>
      <NavStyle>
        {links.map(({ link, value }) => (
          <li>
            <a href={link} target="_blank">
              {value}
            </a>
          </li>
        ))}
      </NavStyle>
    </>
  );
};
