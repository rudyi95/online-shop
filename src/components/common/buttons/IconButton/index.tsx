import React, { FC } from "react";
import { Badge, Tooltip, TooltipProps } from "@mui/material";
import classnames from "classnames";

import { getButtonIcon } from "../../../../utils/services/common/iconButton";

import { useStyles } from "./style";
import { IconButtonProps } from "../../../../types/products";

const IconButton: FC<IconButtonProps & Omit<TooltipProps, "children">> = ({
  placement = "bottom",
  className,
  title,
  onClick,
  type,
  disabled,
  useDefaultStyles = true,
  buttonType,
  badgeContent,
  badgeColor,
  href,
}) => {
  const classes = useStyles();
  const ButtonIcon = getButtonIcon(type);

  const icon = (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <ButtonIcon
        onClick={!disabled ? onClick : () => {}}
        className={classnames(
          className,
          { [classes.root]: useDefaultStyles },
          { [classes.disabled]: disabled }
        )}
        disabled={disabled}
        href={href}
      />
    </a>
  );

  const pickedType = () => {
    switch (buttonType) {
      case "withTooltip":
        return (
          <Tooltip placement={placement} title={title}>
            {icon}
          </Tooltip>
        );
      case "withBadge":
        return (
          <Badge badgeContent={badgeContent} color={badgeColor}>
            {icon}
          </Badge>
        );
      default:
        return <div>{icon}</div>;
    }
  };

  return <div>{pickedType()}</div>;
};

export default IconButton;
