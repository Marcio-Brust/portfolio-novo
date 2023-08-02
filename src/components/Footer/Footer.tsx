import useMedia from "../../utils/hooks/useMedia";
import { FooterStyle } from "./Footer.style";

export const Footer = () => {
  const mobile = useMedia("(max-width:50rem)");

  return (
    <FooterStyle aria-expanded={mobile}>
      <p>Email: brustmw21@gmail.com</p>
      <p>Cel: (21) 97185-2157</p>
    </FooterStyle>
  );
};
