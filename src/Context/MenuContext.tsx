import { ReactNode, useState, useEffect, MouseEventHandler } from "react";

import { createContext } from "react";
import useMedia from "../utils/hooks/useMedia";

type MenuContextTypes = {
  isVisible: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

const InitialValue = {
  isVisible: false,
  handleClick: () => {
    ("");
  },
};

interface MenuProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextTypes>(InitialValue);

export const MenuContextProvider = ({ children }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(InitialValue.isVisible);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  console.log(isVisible);
  const mobile = useMedia("(max-width: 50rem)");

  useEffect(() => {
    setIsVisible(false);
  }, [mobile]);

  return (
    <MenuContext.Provider value={{ isVisible, handleClick }}>
      {children}
    </MenuContext.Provider>
  );
};
