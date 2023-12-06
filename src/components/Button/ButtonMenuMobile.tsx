import { ButtonMenuMobileStyle } from "./ButtonMenuMobile.style";
import { ComponentProps } from "react";

type IButtonProps = ComponentProps<"button"> & {
  media: boolean;
  isVisible: boolean;
};

export const ButtonMenuMobile = ({
  media,
  isVisible,
  ...props
}: IButtonProps) => {
  return (
    <ButtonMenuMobileStyle
      visible={(isVisible && isVisible.toString()) || null}
      mobile={(media && media.toString()) || null}
      {...props}
    ></ButtonMenuMobileStyle>
  );
};
