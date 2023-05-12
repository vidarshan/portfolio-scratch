import { ActionIcon, Tooltip } from "@mantine/core";
import { FC } from "react";
import { INavigationItem } from "../models/INavigationItem";
import { NavigationItemContainer } from "../styles/NavigationItemContainer";
import { useMediaQuery } from "@mantine/hooks";

const NavigationItem: FC<INavigationItem> = ({
  children,
  toolTipContent,
  onClick,
  color,
}) => {
  const largeScreen = useMediaQuery("(min-width: 60em)");

  return (
    <NavigationItemContainer>
      {toolTipContent ? (
        <Tooltip label={toolTipContent} position="right" withArrow>
          <ActionIcon
            color={color}
            size={largeScreen ? "xl" : "md"}
            radius="xl"
            variant="filled"
            onClick={onClick}
          >
            {children}
          </ActionIcon>
        </Tooltip>
      ) : (
        <ActionIcon
          color={color}
          size={largeScreen ? "xl" : "sm"}
          radius="xl"
          variant="filled"
          onClick={onClick}
        >
          {children}
        </ActionIcon>
      )}
    </NavigationItemContainer>
  );
};

export default NavigationItem;
