import React, { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import classnames from "classnames";

import { useStyles } from "./style";

interface ActionButtonProps {
  classname?: string;
  onClick: Function;
  disabled?: boolean;
  text: string;
  icon?: JSX.Element;
  iconRight?: boolean;
  fixed?: boolean;
  useDefaultStyles?: boolean;
}

const ActionButton: FC<ActionButtonProps & ButtonProps> = ({
  classname,
  onClick,
  disabled,
  text,
  icon,
  iconRight,
  fixed,
  useDefaultStyles = true,
  color,
  variant,
  href,
}) => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classnames(
          classname,
          { [classes.root]: useDefaultStyles },
          { [classes.fixed]: fixed },
          { [classes.withIcon]: !!icon },
          { [classes.iconRight]: iconRight }
        )}
        onClick={onClick}
        disabled={disabled}
        color={color}
        variant={variant}
        href={href}
      >
        {icon}
        {text}
      </Button>
    </>
  );
};

export default ActionButton;
