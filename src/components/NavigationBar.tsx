import React from "react";
import { NavigationBarContainer } from "../styles/NavigationBar";
import {
  BiHomeAlt,
  BiUserCircle,
  BiTrophy,
  BiBriefcaseAlt2,
  BiCategory,
  BiMessageAlt,
  BiMoon,
} from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <NavigationItem hoverContent="Just the beginning!">
        <BiHomeAlt />
      </NavigationItem>
      <NavigationItem hoverContent="Get to know more about me.">
        <BiUserCircle />
      </NavigationItem>
      <NavigationItem hoverContent="My work experience over the years.">
        <BiBriefcaseAlt2 />
      </NavigationItem>
      <NavigationItem hoverContent="My awesome projects and ideas.">
        <BiCategory />
      </NavigationItem>
      <NavigationItem hoverContent="What my collaborators said about me.">
        <BiTrophy />
      </NavigationItem>
      <NavigationItem hoverContent="Drop a message to get connected.">
        <BiMessageAlt />
      </NavigationItem>
      <NavigationItem>
        <BiMoon />
      </NavigationItem>
      <NavigationItem>
        <AiOutlineGithub />
      </NavigationItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
