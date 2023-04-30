import { ActionIcon, HoverCard, Text } from "@mantine/core";
import { FC } from "react";
import { INavigationItem } from "../models/INavigationItem";
import { NavigationItemContainer } from "../styles/NavigationItemContainer";

const NavigationItem: FC<INavigationItem> = ({ children, hoverContent }) => {
  return (
    <NavigationItemContainer>
      {hoverContent ? (
        <HoverCard width={280} shadow="md" position="right" withArrow>
          <HoverCard.Target>
            <ActionIcon color="red" size="md" radius="xl" variant="gradient">
              {children}
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">{hoverContent}</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      ) : (
        <ActionIcon color="red" size="md" radius="xl" variant="gradient">
          {children}
        </ActionIcon>
      )}
    </NavigationItemContainer>
  );
};

export default NavigationItem;
