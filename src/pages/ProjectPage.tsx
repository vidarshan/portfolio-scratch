import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Collapse,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SegmentedControl,
  Spoiler,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import f from "../images/techstop.webp";
import { BiMobileAlt } from "react-icons/bi";
import { GrProjects, GrList } from "react-icons/gr";

const ProjectPage = () => {
  const [opened, setOpened] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("projects");

  return (
    <Container mt={120}>
      <Text weight={600} size={40}>
        Projects
      </Text>
      <SegmentedControl
        radius="xl"
        value={selectedSegment}
        onChange={(e) => setSelectedSegment(e)}
        transitionDuration={500}
        transitionTimingFunction="linear"
        mt={50}
        data={[
          {
            value: "projects",
            label: (
              <Center>
                <GrProjects size="1rem" />
                <Box ml={10}>Projects</Box>
              </Center>
            ),
          },
          {
            value: "archive",
            label: (
              <Center>
                <GrList size="1rem" />
                <Box ml={10}>Projects Archive</Box>
              </Center>
            ),
          },
        ]}
      />
      {selectedSegment === "projects" ? (
        <Grid gutter="xl">
          {projects.map((project) => {
            return (
              <Grid.Col key={project.id} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card shadow="xl" padding="sm" radius="lg">
                  <Card.Section sx={{ position: "relative" }}>
                    <ActionIcon
                      sx={{
                        position: "absolute",
                        zIndex: 1000,
                        right: 8,
                        top: 8,
                      }}
                      color="blue"
                      variant="filled"
                      radius="xl"
                      size="lg"
                    >
                      <BiMobileAlt />
                    </ActionIcon>
                    <ActionIcon
                      sx={{
                        position: "absolute",
                        zIndex: 1000,
                        right: 40,
                        top: 8,
                        marginRight: 10,
                      }}
                      color="blue"
                      variant="filled"
                      radius="xl"
                      size="lg"
                    >
                      <SiGithub />
                    </ActionIcon>
                    <Image src={f} height={300} alt="Norway" />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{project.name}</Text>
                    <Badge color="pink" variant="filled">
                      {project.tags}
                    </Badge>
                  </Group>
                  <Group position="apart" mt="md" mb="xs">
                    <Spoiler
                      maxHeight={120}
                      showLabel="Show more"
                      hideLabel="Hide"
                    >
                      <Text weight={500}>{project.description}</Text>
                    </Spoiler>
                  </Group>
                  <Group mt={30}>
                    {project.technologies.map((tech) => {
                      return (
                        <Badge
                          key={tech.id}
                          color={tech.color}
                          size="sm"
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
      ) : (
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
      )}
    </Container>
  );
};

export default ProjectPage;
