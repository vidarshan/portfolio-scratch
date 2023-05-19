import { Box, Container, Slider, Text } from "@mantine/core";
import styled from "styled-components";
import { IReachOutContainerProps } from "../models/IReachOut";

export const ReachOutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const ReachOutSubText = styled(Text)`
  margin-bottom: 30px;
`;
