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

const NavigationBar = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  return (
    <NavigationBarContainer>
      <NavigationItem color="lime" toolTipContent="Just the beginning!">
        <BiHomeAlt size={20} />
      </NavigationItem>
      <NavigationItem color="lime" toolTipContent="Get to know more about me.">
        <BiUserCircle size={20} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="My work experience over the years."
      >
        <BiBriefcaseAlt2 size={20} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="My awesome projects and ideas."
      >
        <BiCategory size={20} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="What my collaborators said about me."
      >
        <BiTrophy size={20} />
      </NavigationItem>
      <NavigationItem
        color="lime"
        toolTipContent="Drop a message to get connected."
      >
        <BiMessageAlt size={20} />
      </NavigationItem>
      <NavigationItem
        color="yellow"
        onClick={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        {colorScheme === "light" ? <BiSun size={20} /> : <BiMoon size={20} />}
      </NavigationItem>
      <NavigationItem color="gray" toolTipContent="View this project on Github">
        <AiOutlineGithub />
      </NavigationItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
