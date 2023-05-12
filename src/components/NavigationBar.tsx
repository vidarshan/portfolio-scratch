import { NavigationBarContainer } from "../styles/NavigationBar";
import {
  BiHomeAlt,
  BiUserCircle,
  BiTrophy,
  BiBriefcaseAlt2,
  BiCategory,
  BiMessageAlt,
  BiMoon,
  BiSun,
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
      <NavigationItem color="lime" toolTipContent="Just the beginning!">
        <BiHomeAlt size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem color="lime" toolTipContent="Get to know more about me.">
        <BiUserCircle size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="My work experience over the years."
      >
        <BiBriefcaseAlt2 size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="My awesome projects and ideas."
      >
        <BiCategory size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="What my collaborators said about me."
      >
        <BiTrophy size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="Drop a message to get connected."
      >
        <BiMessageAlt size={largeScreen ? 20 : 16} />
      </NavigationItem>
      <NavigationItem
        color="yellow"
        onClick={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        {colorScheme === "light" ? (
          <BiSun size={largeScreen ? 20 : 16} />
        ) : (
          <BiMoon size={largeScreen ? 20 : 16} />
        )}
      </NavigationItem>
      <NavigationItem color="gray" toolTipContent="View this project on Github">
        <AiOutlineGithub />
      </NavigationItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
