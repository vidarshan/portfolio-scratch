import { NavigationBarContainer } from "../styles/NavigationBar";
import {
  BiHomeAlt,
  BiTrophy,
  BiBriefcaseAlt2,
  BiCategory,
  BiMessageAlt,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import NavigationItem from "./NavigationItem";
import { useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const NavigationBar = () => {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  return (
    <NavigationBarContainer background={colorScheme}>
      <NavigationItem color="blue" toolTipContent="Just the beginning!">
        <BiHomeAlt size={largeScreen ? 18 : 14} />
      </NavigationItem>
      <NavigationItem color="dark" toolTipContent="Get to know more about me.">
        <BiUser size={largeScreen ? 18 : 14} />
      </NavigationItem>
      <NavigationItem
        color="dark"
        toolTipContent="My work experience over the years."
      >
        <BiBriefcaseAlt2 size={largeScreen ? 18 : 14} />
      </NavigationItem>
      <NavigationItem
        color="dark"
        toolTipContent="My awesome projects and ideas."
      >
        <BiCategory size={largeScreen ? 18 : 14} />
      </NavigationItem>
      <NavigationItem
        color="dark"
        toolTipContent="What my collaborators said about me."
      >
        <BiTrophy size={largeScreen ? 18 : 14} />
      </NavigationItem>
      <NavigationItem
        color="dark"
        toolTipContent="Drop a message to get connected."
      >
        <BiMessageAlt size={largeScreen ? 18 : 14} />
      </NavigationItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
