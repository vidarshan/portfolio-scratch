import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Collapse,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { SiGithub } from "react-icons/si";

const ProjectPage = () => {
  const [opened, setOpened] = useState(false);

  const openPreview = () => {
    window.open(
      "https://booking-app-tu3v.onrender.com",
      `App Preview`,
      "resizable=no,width=380,height=870"
    );
  };

  return (
    <Container sx={{ height: "100vh" }}>
      <Text weight={600} size={40}>
        Projects (Vibration)
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section sx={{ position: "relative" }}>
              <ActionIcon
                sx={{ position: "absolute", zIndex: 1000, right: 4, top: 4 }}
                color="blue"
                variant="light"
                radius="xl"
                size="lg"
              >
                <SiGithub />
              </ActionIcon>
              <ActionIcon
                sx={{ position: "absolute", zIndex: 1000, right: 40, top: 4 }}
                color="blue"
                variant="light"
                radius="xl"
                size="lg"
              >
                <SiGithub />
              </ActionIcon>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={200}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Techstop Mobile</Text>
              <Badge color="pink" variant="light">
                Frontend
              </Badge>
            </Group>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>
                An e-commerce website, ideal for a tech gadget store. The
                minimalist user interface allows users to navigate within the
                application easily. Only the relevant information is shown,
                which makes the user interface even better. Includes the most
                needed features for an ecommerce website, such as search
                filters, shopping cart and an integrated mock payment gateway
                with Paypal.
              </Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section sx={{ position: "relative" }}>
              <ActionIcon
                sx={{ position: "absolute", zIndex: 1000, right: 4, top: 4 }}
                color="blue"
                variant="light"
                radius="xl"
                size="lg"
              >
                <SiGithub />
              </ActionIcon>
              <ActionIcon
                sx={{ position: "absolute", zIndex: 1000, right: 40, top: 4 }}
                color="blue"
                variant="light"
                radius="xl"
                size="lg"
              >
                <SiGithub />
              </ActionIcon>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={200}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Techstop Mobile</Text>
              <Badge color="pink" variant="light">
                Frontend
              </Badge>
            </Group>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>
                An e-commerce website, ideal for a tech gadget store. The
                minimalist user interface allows users to navigate within the
                application easily.
              </Text>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="xl" withBorder radius="lg">
            <Image width={300} src={require("../images/techstop.webp")} />
          </Card>
        </Grid.Col>
      </Grid>
      <Group position="center" mb={5}>
        <Button radius="xl" onClick={() => setOpened(!opened)}>
          {opened ? "Hide" : "Expand"} Project Archive
        </Button>
      </Group>
      <Collapse in={opened}>
        <Card
          className="archive-card"
          sx={{ display: "flex" }}
          shadow="sm"
          radius="md"
          withBorder
        >
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={80}
              width={80}
              alt="Norway"
            />
          </Card.Section>
        </Card>
      </Collapse>
    </Container>
  );
};

export default ProjectPage;
