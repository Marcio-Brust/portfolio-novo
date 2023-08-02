import useMedia from "../../utils/hooks/useMedia";
import { Button } from "../Button/Button";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { NavMenu } from "../Nav/NavMenu";
import { HeaderStyle } from "./Header.style";

export const Header = () => {
  const mobile = useMedia("(max-width:50rem)");

  return (
    <HeaderStyle>
      <h1>Dev</h1>
      <Button />
      {mobile ? <MenuMobile /> : <NavMenu />}
    </HeaderStyle>
  );
};
