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
            <ActionIcon color="grape" size="xl" radius="xl" variant="light">
              {children}
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">{hoverContent}</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      ) : (
        <ActionIcon color="lime" size="xl" radius="xl" variant="light">
          {children}
        </ActionIcon>
      )}
    </NavigationItemContainer>
  );
};

export default NavigationItem;
