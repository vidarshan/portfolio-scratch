import styled, { css } from "styled-components";
import { NavigationBarContainerProps } from "../models/INavigationBar";

export const NavigationBarContainer = styled.div<NavigationBarContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  ${(props) =>
    props.background === "light"
      ? css`
          background-color: #fff;
        `
      : css`
          background-color: #1A1B1E;
        `}

  @media (max-width: 1100px) {
    flex-direction: row;
    height: fit-content;
    width: 100vw;
  }
`;
