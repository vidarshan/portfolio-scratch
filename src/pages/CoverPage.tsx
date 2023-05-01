import { Flex, Image, Text, Transition } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CoverPageContainer } from "../styles/CoverPage";

const CoverPage = () => {
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
    </CoverPageContainer>
  );
};

export default CoverPage;
