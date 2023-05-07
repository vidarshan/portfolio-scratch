import { Flex, Kbd, Text, Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import { CoverPageContainer } from "../styles/CoverPage";
import { BsCommand } from "react-icons/bs";
import { useOs } from "@mantine/hooks";
import { Plus } from "../styles/AboutPage";

const CoverPage = () => {
  const os = useOs();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <CoverPageContainer>
      <Transition
        mounted={opened}
        transition="slide-right"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Text weight={600} size={50} style={styles}>
            Hello
          </Text>
        )}
      </Transition>
      <Transition
        mounted={opened}
        transition="slide-right"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => (
          <Text weight={600} size={50} style={styles}>
            I'm Vidarshan
          </Text>
        )}
      </Transition>
      <Transition
        mounted={opened}
        transition="slide-right"
        duration={600}
        timingFunction="ease"
      >
        {(styles) => (
          <Text weight={600} size={50} style={styles}>
            A Software Engineer
          </Text>
        )}
      </Transition>
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
