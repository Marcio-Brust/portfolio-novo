import { useMenu } from "../../context/useMenuContext";
import { ButtonMenuMobile } from "../Button/ButtonMenuMobile";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { NavMenu } from "../Nav/NavMenu";
import { HeaderStyle } from "./Header.style";

export const Header = () => {
  const { media, isVisible, setIsVisible } = useMenu();

  return (
    <HeaderStyle>
      <h1>Dev</h1>
      <ButtonMenuMobile
        media={media}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      {media ? (
        <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : (
        <NavMenu />
      )}
    </HeaderStyle>
  );
};
