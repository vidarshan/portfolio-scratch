import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Text,
  Timeline,
} from "@mantine/core";
import { BiLinkExternal } from "react-icons/bi";

const WorkPage = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Text weight={600} size={40}>
        Work Experience
      </Text>
      <Timeline mt={50} color="green" active={4} bulletSize={24} lineWidth={4}>
        <Timeline.Item
          bullet={<Container className="bullet-item">1</Container>}
        >
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Flex direction="row" align="center" justify="space-between">
              <Text size="md" weight={800}>
                Intern Software Engineer
              </Text>
              <ActionIcon color="blue" radius="xl" variant="light" size="lg">
                <BiLinkExternal />
              </ActionIcon>
            </Flex>

            <Text color="indigo" weight={700} size="sm">
              Excalibur Systems
            </Text>

            <Text size="xs" weight={700} mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <List size="sm" mt={8} mb={14}>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
            <Group>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
            </Group>
          </Card>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Container className="bullet-item">2</Container>
          }
        >
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Flex direction="row" align="center" justify="space-between">
              <Text size="md" weight={800}>
                Intern Software Engineer
              </Text>
              <ActionIcon color="blue" radius="xl" variant="light" size="lg">
                <BiLinkExternal />
              </ActionIcon>
            </Flex>
            <Text color="indigo" weight={700} size="sm">
              Excalibur Systems
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <List size="sm" mt={8} mb={14}>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
            <Group>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
            </Group>
            <Divider />
            <Text size="md" weight={800} mt={18}>
              Intern Software Engineer
            </Text>
            <Text color="indigo" weight={700} size="sm">
              Excalibur Systems
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <List size="sm" mt={8} mb={14}>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
            <Group>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
            </Group>
          </Card>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Container className="bullet-item">3</Container>
          }
        >
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Flex direction="row" align="center" justify="space-between">
              <Text size="md" weight={800}>
                Intern Software Engineer
              </Text>
              <ActionIcon color="blue" radius="xl" variant="light" size="lg">
                <BiLinkExternal />
              </ActionIcon>
            </Flex>
            <Text color="indigo" weight={700} size="sm">
              Excalibur Systems
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <List size="sm" mt={8} mb={14}>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
            <Group>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
            </Group>
          </Card>
        </Timeline.Item>
        <Timeline.Item
          bullet={
            <Container className="bullet-item">4</Container>
          }
        >
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Flex direction="row" align="center" justify="space-between">
              <Text size="md" weight={800}>
                Intern Software Engineer
              </Text>
              <ActionIcon color="blue" radius="xl" variant="light" size="lg">
                <BiLinkExternal />
              </ActionIcon>
            </Flex>
            <Text color="indigo" weight={700} size="sm">
              Excalibur Systems
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <List size="sm" mt={8} mb={14}>
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
            <Group>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
              <Badge color="green" size="md" variant="light">
                Node JS
              </Badge>
            </Group>
          </Card>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
};

export default WorkPage;
