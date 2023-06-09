import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import emailjs from "emailjs-com";
import { MdOutlineClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useForm } from "@mantine/form";
import { ReachOutContainer } from "../styles/Reachout";
import { notifications } from "@mantine/notifications";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

const ReachOut = () => {
  const form = useForm({
    initialValues: {
      email: "",
      message: "",
      termsOfService: false,
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Enter a valid email address",
      message: (value) =>
        value?.trim()?.length >= 5 ? null : "Enter a valid message",
    },
  });

  const clearForm = () => {
    form.reset();
  };

  const sendEmail = async (values: any) => {
    const { email, message } = values;
    var formInfo = {
      email,
      message,
    };

    try {
      notifications.show({
        id: "load-data",
        loading: true,
        title: "Sending...",
        message: "Sending message to the inbox",
        autoClose: 20000,
        radius: "md",
        withCloseButton: false,
        withBorder: true,
        styles: () => ({
          title: { fontWeight: 700 },
          description: { fontWeight: 600 },
        }),
      });

      const emailres = await emailjs.send(
        process.env.REACT_APP_PUBLIC_EMAILJS_SERVICE as string,
        process.env.REACT_APP_PUBLIC_EMAILJS_TEMPLATE as string,
        formInfo as any,
        process.env.REACT_APP_PUBLIC_EMAILJS_USER as string
      );

      if (emailres && emailres.status === 200) {
        notifications.update({
          id: "load-data",
          color: "teal",
          title: "Sent!",
          message: "Sent your message to the inbox",
          icon: <IoMdCheckmark size="1rem" />,
          autoClose: 20000,
          withCloseButton: false,
          withBorder: true,
          radius: "md",
          styles: () => ({
            title: { fontWeight: 700 },
            description: { fontWeight: 600 },
          }),
        });
      }
    } catch (exception) {
      notifications.update({
        id: "load-data",
        color: "red",
        title: "Oops!",
        message: "Failed. Please try again.",
        icon: <IoMdClose size="1rem" />,
        autoClose: 20000,
        withCloseButton: false,
        withBorder: true,
        radius: "md",
        styles: () => ({
          title: { fontWeight: 700 },
          description: { fontWeight: 600 },
        }),
      });
    }
    form.reset();
  };

  return (
    <ReachOutContainer>
      <Flex direction="column" justify="center">
        <Box id="reachOutSection">
          <Text mb={20} weight={600} size={40}>
            Reach Out
          </Text>
          <Card className="reach-out-card" shadow="sm" radius="lg" withBorder>
            <form onSubmit={form.onSubmit((values) => sendEmail(values))}>
              <Text sx={{ marginBottom: 30 }} size="sm" weight={700}>
                Send me a message
              </Text>
              <TextInput
                radius="md"
                label="Your Email"
                placeholder="Email address"
                {...form.getInputProps("email")}
                withAsterisk
              />
              <Textarea
                mt={20}
                radius="md"
                placeholder="Your message"
                label="Your message"
                {...form.getInputProps("message")}
                withAsterisk
              />
              <Flex direction="row" justify="flex-end" mt={20}>
                <Group>
                  <ActionIcon
                    size="lg"
                    radius="xl"
                    color="gray"
                    variant="filled"
                    onClick={() => clearForm()}
                  >
                    <MdOutlineClose />
                  </ActionIcon>
                  <Button
                    size="sm"
                    radius="xl"
                    color="red"
                    leftIcon={<IoSend />}
                    variant="filled"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Group>
              </Flex>
            </form>
          </Card>
        </Box>
      </Flex>
    </ReachOutContainer>
  );
};

export default ReachOut;
