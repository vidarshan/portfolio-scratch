import { ActionIcon, Tooltip } from "@mantine/core";
import { FC } from "react";
import { INavigationItem } from "../models/INavigationItem";
import { NavigationItemContainer } from "../styles/NavigationItemContainer";

const NavigationItem: FC<INavigationItem> = ({
  children,
  toolTipContent,
  onClick,
  color,
}) => {
  return (
    <NavigationItemContainer>
      {toolTipContent ? (
        <Tooltip label={toolTipContent} position="right" withArrow>
          <ActionIcon
            color={color}
            size="xl"
            radius="xl"
            variant="light"
            onClick={onClick}
          >
            {children}
          </ActionIcon>
        </Tooltip>
      ) : (
        <ActionIcon
          color={color}
          size="xl"
          radius="xl"
          variant="light"
          onClick={onClick}
        >
          {children}
        </ActionIcon>
      )}
    </NavigationItemContainer>
  );
};

export default NavigationItem;
