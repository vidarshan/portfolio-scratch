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
        <BiHomeAlt size={20} />
      </NavigationItem>
      <NavigationItem hoverContent="Get to know more about me.">
        <BiUserCircle size={20} />
      </NavigationItem>
      <NavigationItem hoverContent="My work experience over the years.">
        <BiBriefcaseAlt2 size={20} />
      </NavigationItem>
      <NavigationItem hoverContent="My awesome projects and ideas.">
        <BiCategory size={20} />
      </NavigationItem>
      <NavigationItem hoverContent="What my collaborators said about me.">
        <BiTrophy size={20} />
      </NavigationItem>
      <NavigationItem hoverContent="Drop a message to get connected.">
        <BiMessageAlt size={20} />
      </NavigationItem>
      <NavigationItem>
        <BiMoon size={20} />
      </NavigationItem>
      <NavigationItem>
        <AiOutlineGithub />
      </NavigationItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
