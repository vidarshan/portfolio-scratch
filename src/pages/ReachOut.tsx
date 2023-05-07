import {
  ActionIcon,
  Card,
  Container,
  Flex,
  Group,
  Text,
  TextInput,
  Textarea,
  Tooltip,
} from "@mantine/core";
import { MdOutlineClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";

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
        <Flex direction="row" justify="flex-end" mt={20}>
          <Group>
            <Tooltip label="Clear Form" position="right" withArrow>
              <ActionIcon color="red" size="xl" radius="xl" variant="light">
                <MdOutlineClose size={20} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Send Message" position="bottom" withArrow>
              <ActionIcon color="teal" size="xl" radius="xl" variant="light">
                <IoSend size={20} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Flex>
      </Card>
    </Container>
  );
};

export default ReachOut;
