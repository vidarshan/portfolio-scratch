import { NavigationBarContainer } from "../styles/NavigationBar";
import {
  BiHomeAlt,
  BiTrophy,
  BiBriefcaseAlt2,
  BiCategory,
  BiMessageAlt,
  BiUser,
} from "react-icons/bi";
import NavigationItem from "./NavigationItem";
import { useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
