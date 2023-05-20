import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { BiLinkExternal } from "react-icons/bi";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { container, item } from "../utils";
import { motion } from "framer-motion";

const WorkPage = ({ ref }: any) => {
  return (
    <Container ref={ref}>
      <Text mb={20} weight={600} size={40}>
        Work Experience
      </Text>

      <Card mb={50} shadow="xl" padding="sm" radius="lg">
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="row" align="center">
            {" "}
            <ThemeIcon
              color="red"
              radius="xl"
              size="md"
              sx={{ marginRight: 10 }}
            >
              <RiNumber1 />
            </ThemeIcon>
            <Flex direction="column">
              <Text size="md" weight={800}>
                Intern Software Engineer
              </Text>
              <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                Contribution: Full Stack Developer
              </Text>
              <Text color="red" weight={700} size="sm">
                Excalibur Systems
              </Text>{" "}
              <Text size="xs" weight={700}>
                2020-08 ~ 2021-04
              </Text>
            </Flex>
          </Flex>
          <ActionIcon color="blue" radius="xl" variant="filled" size="md">
            <BiLinkExternal />
          </ActionIcon>
        </Flex>

        <Container>
          <List size="sm" mt={25} mb={14}>
            <List.Item>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </List.Item>
            <List.Item>
              Designed user Interfaces and implemented the designs with code.
            </List.Item>
            <List.Item>
              Built completely new web applications for small-mid scale
              businesses.
            </List.Item>
            <List.Item>
              Gained knowledge on deploying applications to the web.
            </List.Item>
          </List>
          <Group mt={25}>
            <Badge color="yellow" size="md" variant="filled">
              Javascript
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React JS
            </Badge>
            <Badge color="green" size="md" variant="filled">
              Node JS
            </Badge>
            <Badge color="gray" size="md" variant="filled">
              Express JS
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              Postgres
            </Badge>
          </Group>
        </Container>
      </Card>
      <Card mb={50} shadow="xl" padding="sm" radius="lg">
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="row" align="center">
            <ThemeIcon
              color="red"
              radius="xl"
              size="md"
              sx={{ marginRight: 10 }}
            >
              <RiNumber2 />
            </ThemeIcon>
            <Flex direction="column">
              <Text size="md" weight={800}>
                Trainee Software Engineer
              </Text>
              <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                Contribution: Full Stack Developer
              </Text>
              <Text color="orange" weight={700} size="sm">
                Beta Launch
              </Text>

              <Text size="xs" weight={700}>
                2021-04 ~ 2021-09
              </Text>
            </Flex>
          </Flex>
          <ActionIcon color="blue" radius="xl" variant="filled" size="md">
            <BiLinkExternal />
          </ActionIcon>
        </Flex>

        <Container>
          <List size="sm" mt={25} mb={14}>
            <List.Item>
              Revamped web applications with old user interfaces to modern and
              updated user interfaces.
            </List.Item>
            <List.Item>
              Implemented and validated new functionalities on frontend in React
              JS based web applications.
            </List.Item>
            <List.Item>
              Modified and improved backend REST API's functialities.
            </List.Item>
            <List.Item>
              Modified relational database's structures to cater new
              functionalities.
            </List.Item>
          </List>
          <Group mt={25} mb={30}>
            <Badge color="yellow" size="md" variant="filled">
              Javascript
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React JS
            </Badge>
            <Badge color="orange" size="md" variant="filled">
              Semantic UI
            </Badge>
            <Badge color="pink" size="md" variant="filled">
              SCSS
            </Badge>
            <Badge color="green" size="md" variant="filled">
              Node JS
            </Badge>
            <Badge color="gray" size="md" variant="filled">
              Express JS
            </Badge>
          </Group>
        </Container>
        <Divider />
        <Flex direction="row" align="center">
          <ThemeIcon color="red" radius="xl" size="md" sx={{ marginRight: 10 }}>
            <RiNumber3 />
          </ThemeIcon>
          <Flex direction="column">
            <Text size="md" weight={800} mt={18}>
              Associate Software Engineer
            </Text>
            <Text color="dimmed" size="xs" weight={800} tt="uppercase">
              Contribution: Full Stack Developer
            </Text>
            <Text color="indigo" weight={700} size="sm">
              Beta Launch
            </Text>
            <Text size="xs" weight={700} mt={4}>
              2022-09 ~ 2022-03
            </Text>
          </Flex>
        </Flex>
        <Container>
          <List size="sm" mt={25} mb={14}>
            <List.Item>
              Gained knowledge and implemented end-to-end testing for web
              applications.
            </List.Item>
            <List.Item>
              Implemented and validated new functionalities on frontend in React
              JS based web applications.
            </List.Item>
            <List.Item>
              Modified and improved backend REST API's functialities.
            </List.Item>
            <List.Item>
              Modified relational database's structures to cater new
              functionalities.
            </List.Item>
          </List>
          <Group mt={25}>
            <Badge color="yellow" size="md" variant="filled">
              Javascript
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React JS
            </Badge>
            <Badge color="green" size="md" variant="filled">
              Node JS
            </Badge>
            <Badge color="gray" size="md" variant="filled">
              Express JS
            </Badge>
            <Badge color="gray" size="md" variant="filled">
              Cypress.io
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              MySQL
            </Badge>
          </Group>
        </Container>
      </Card>

      <Card mb={50} shadow="xl" padding="sm" radius="lg">
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="row" align="center">
            <ThemeIcon
              color="red"
              radius="xl"
              size="md"
              sx={{ marginRight: 10 }}
            >
              <RiNumber4 />
            </ThemeIcon>
            <Flex direction="column">
              <Text size="md" weight={800}>
                Associate Software Engineer
              </Text>
              <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                Contribution: Full Stack Developer
              </Text>
              <Text color="indigo" weight={700} size="sm">
                Dev4s
              </Text>
              <Text size="xs" weight={700} mt={4}>
                2022-03 ~ 2022-05
              </Text>
            </Flex>
          </Flex>
          <ActionIcon color="blue" radius="xl" variant="filled" size="md">
            <BiLinkExternal />
          </ActionIcon>
        </Flex>
        <Container>
          <List size="sm" mt={25} mb={14}>
            <List.Item>Implemented user interfaces for new projects.</List.Item>
            <List.Item>
              Implemented new functionalities per client requirements both in
              the frontend and the backend.
            </List.Item>
            <List.Item>
              Worked with 3rd party APIs such as Google API to fetch necessary
              information for web applications.
            </List.Item>
          </List>
          <Group mt={25}>
            <Badge color="blue" size="md" variant="filled">
              Typescript
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React JS
            </Badge>
            <Badge color="green" size="md" variant="filled">
              Node JS
            </Badge>
            <Badge color="gray" size="md" variant="filled">
              Express JS
            </Badge>
            <Badge color="yellow" size="md" variant="filled">
              Firebase
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              MySQL
            </Badge>
          </Group>
        </Container>
      </Card>
      <Card shadow="xl" padding="sm" radius="lg">
        <Flex direction="row" align="center" justify="space-between">
          <Flex direction="row" align="center">
            <ThemeIcon
              color="red"
              radius="xl"
              size="md"
              sx={{ marginRight: 10 }}
            >
              <RiNumber5 />
            </ThemeIcon>
            <Flex direction="column">
              <Text size="md" weight={800}>
                Software Engineer
              </Text>
              <Text color="dimmed" size="xs" weight={800} tt="uppercase">
                Contribution: Full Stack Developer
              </Text>
              <Text color="indigo" weight={700} size="sm">
                Appspotr
              </Text>
              <Text size="xs" weight={700} mt={4}>
                2022-05 ~ Present
              </Text>
            </Flex>
          </Flex>
          <ActionIcon color="red" radius="xl" variant="light" size="md">
            <BiLinkExternal />
          </ActionIcon>
        </Flex>
        <Container>
          <List size="sm" mt={25} mb={14}>
            <List.Item>
              Implementing extensive Javascript/ Typescript based
              functionalities to design and develop mobile apps from a content
              managing system.
            </List.Item>
            <List.Item>
              Gaining experience in developing and maintaining custom user
              interface libraries and React JS library projects.
            </List.Item>
            <List.Item>
              Implementing utility functionalities for React JS applications;
              drag-and-drop functions, etc...
            </List.Item>
            <List.Item>
              Working with React based tools such as Redux Toolkit and Styled
              components, in order to maintain resusable and well refactored
              code.
            </List.Item>
            <List.Item>
              Implementing new functionalities and modifying existing
              functionalities of the platform with best-performace mindset.
            </List.Item>
          </List>
          <Group mt={25}>
            <Badge color="blue" size="md" variant="filled">
              Typescript
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React JS
            </Badge>
            <Badge color="blue" size="md" variant="filled">
              React Native
            </Badge>
            <Badge color="green" size="md" variant="filled">
              Jest
            </Badge>
          </Group>
        </Container>
      </Card>
    </Container>
  );
};

export default WorkPage;
