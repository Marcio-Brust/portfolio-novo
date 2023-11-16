import { ButtonMenuMobileStyle } from "./ButtonMenuMobile.style";
import { ComponentProps, Dispatch, SetStateAction } from "react";

type IButtonProps = ComponentProps<"button"> & {
  media: boolean;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const ButtonMenuMobile = ({
  media,
  isVisible,
  setIsVisible,
  ...props
}: IButtonProps) => {
  return (
    <ButtonMenuMobileStyle
      visible={(isVisible && isVisible.toString()) || null}
      mobile={(media && media.toString()) || null}
      onClick={() => setIsVisible(!isVisible)}
      {...props}
    ></ButtonMenuMobileStyle>
  );
};
