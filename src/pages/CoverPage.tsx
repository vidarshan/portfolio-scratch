import { Flex, Kbd, Text, Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import { CoverPageContainer } from "../styles/CoverPage";
import { BsCommand } from "react-icons/bs";
import { useMediaQuery, useOs } from "@mantine/hooks";
import { Plus } from "../styles/AboutPage";

const CoverPage = () => {
  const os = useOs();
  const [opened, setOpened] = useState(false);
  const largeScreen = useMediaQuery("(min-width: 60em)");

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <CoverPageContainer>
      <Text weight={600} size={largeScreen ? 50 : 25}>
        Hello
      </Text>

      <Text weight={600} size={largeScreen ? 50 : 26}>
        I'm Vidarshan
      </Text>

      <Text weight={600} size={largeScreen ? 50 : 26}>
        A Software Engineer
      </Text>

      {os === "macos" || os === "windows" || os === "linux" ? (
        <Flex align="center">
          <Kbd>{os === "macos" ? <BsCommand /> : "Ctrl"}</Kbd>
          <Plus>+</Plus>
          <Kbd>j</Kbd>
          <Text ml={4} className="word-spacing-small" weight={600} size="xs">
            {" "}
            to toggle theme
          </Text>
        </Flex>
      ) : null}
    </CoverPageContainer>
  );
};

export default CoverPage;
