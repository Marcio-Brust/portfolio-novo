import {
  useState,
  useEffect,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

import useMedia from "../utils/hooks/useMedia";

type IMenuContextTypes = {
  media: boolean;
  isVisible: boolean;
  toggleVisible: () => Dispatch<SetStateAction<boolean>> | void;
};

const MenuContext = createContext<IMenuContextTypes | null>(null);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const MenuContextProvider = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);

  const media = useMedia("(max-width: 50rem)");

  const toggleVisible = () => setIsVisible(!isVisible);

  useEffect(() => {
    setIsVisible(false);
  }, [media]);

  return (
    <MenuContext.Provider value={{ media, isVisible, toggleVisible }}>
      {children}
    </MenuContext.Provider>
  );
};
