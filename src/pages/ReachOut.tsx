import {
  ActionIcon,
  Button,
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
      <Flex direction="column" justify="center" sx={{ height: "100%" }}>
        <Text mb={20} weight={600} size={40}>
          Reach Out
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
              {" "}
              <Button color="gray" radius="xl" leftIcon={<MdOutlineClose />} variant="light">
                Cancel
              </Button>
              <Button radius="xl" leftIcon={<IoSend />} variant="light">
                Send Message
              </Button>
            </Group>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
};

export default ReachOut;
