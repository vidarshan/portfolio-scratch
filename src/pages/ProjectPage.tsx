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
import { projects } from "../data/projects";
import f from "../images/techstop.webp";

const ProjectPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container mt={120}>
      <Text weight={600} size={40}>
        Projects
      </Text>
      <Grid>
        {projects.map((project) => {
          return (
            <Grid.Col key={project.id} xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section sx={{ position: "relative" }}>
                  <ActionIcon
                    sx={{
                      position: "absolute",
                      zIndex: 1000,
                      right: 4,
                      top: 4,
                    }}
                    color="blue"
                    variant="light"
                    radius="xl"
                    size="lg"
                  >
                    <SiGithub />
                  </ActionIcon>
                  <ActionIcon
                    sx={{
                      position: "absolute",
                      zIndex: 1000,
                      right: 40,
                      top: 4,
                      marginRight: 10,
                    }}
                    color="blue"
                    variant="light"
                    radius="xl"
                    size="lg"
                  >
                    <SiGithub />
                  </ActionIcon>
                  <Image src={f} height={200} alt="Norway" />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{project.name}</Text>
                  <Badge color="pink" variant="filled">
                    {project.tags}
                  </Badge>
                </Group>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{project.description}</Text>
                </Group>
                <Group mt="md">
                  {project.technologies.map((tech) => {
                    return (
                      <Badge
                        key={tech.id}
                        color={tech.color}
                        size="md"
                        variant="filled"
                      >
                        {tech.name}
                      </Badge>
                    );
                  })}
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
      <Group position="center" mb={5}>
        <Button variant="light" radius="xl" onClick={() => setOpened(!opened)}>
          {opened ? "Hide" : "Expand"} Project Archive
        </Button>
      </Group>
      <Collapse
        in={opened}
        transitionDuration={100}
        transitionTimingFunction="linear"
      >
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
          <Flex align="center" sx={{ width: "100%" }}>
            <Flex
              align="center"
              justify="space-between"
              sx={{ width: "100%" }}
              ml={26}
            >
              <Text weight={800}>Find my stay</Text>{" "}
              <Flex>
                <ActionIcon
                  mr={10}
                  color="blue"
                  variant="light"
                  radius="xl"
                  size="lg"
                >
                  <SiGithub />
                </ActionIcon>
                <ActionIcon
                  mr={10}
                  color="blue"
                  variant="light"
                  radius="xl"
                  size="lg"
                >
                  <SiGithub />
                </ActionIcon>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Collapse>
    </Container>
  );
};

export default ProjectPage;
