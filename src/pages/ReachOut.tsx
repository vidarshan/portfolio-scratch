import {
  ActionIcon,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";

const ReachOut = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Text weight={600} size={40}>
        Reach Out ( affix)
      </Text>
      <Card shadow="sm" radius="lg" withBorder>
        <Text sx={{ marginBottom: 12 }} size="sm" weight={700}>
          Send me a message
        </Text>
        <TextInput
          radius="md"
          label="Custom layout"
          placeholder="Custom layout"
          description="Description below the input"
          inputWrapperOrder={["label", "error", "input", "description"]}
          withAsterisk
        />
        <Textarea
          mt={20}
          radius="md"
          placeholder="Your comment"
          label="Your comment"
          description="Description below the input"
          withAsterisk
        />
        <Flex direction="row" justify="space-between" mt={20}>
          <Group>
            <ActionIcon color="blue" size="xl" radius="xl" variant="light">
              <BsArrowRightCircle />
            </ActionIcon>
          </Group>
          <Group>
            <ActionIcon color="blue" size="xl" radius="xl" variant="light">
              <BsArrowRightCircle />
            </ActionIcon>
            <ActionIcon color="blue" size="xl" radius="xl" variant="light">
              <BsArrowRightCircle />
            </ActionIcon>
          </Group>
        </Flex>
      </Card>
    </Container>
  );
};

export default ReachOut;
