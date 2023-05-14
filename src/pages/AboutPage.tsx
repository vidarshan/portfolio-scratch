import {
  Card,
  Container,
  Text,
  Avatar,
  Flex,
  ActionIcon,
  Divider,
  Blockquote,
  Badge,
  Tooltip,
  Group,
  ColorScheme,
  HoverCard,
  Anchor,
} from "@mantine/core";
import { SiGmail, SiLinkedin, SiGithub, SiStackoverflow } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";
import { BiGitBranch, BiMedal, BiStar, BiTrophy } from "react-icons/bi";
import { useRef } from "react";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { MdOutlineSimCardDownload } from "react-icons/md";
import {
  Githubdark,
  GithubdarkText,
  Githublight,
  GithublightText,
  Stackoverflowdark,
  StackoverflowdarkText,
  Stackoverflowlight,
  StackoverflowlightText,
} from "../styles/AboutPage";
import { technologies } from "../data/competencies";
import { IoMail, IoDownload } from "react-icons/io5";
import { myImg } from "../data/info";

const AboutPage = () => {
  const cardRef: any = useRef();
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Text weight={600} size={largeScreen ? 40 : 25}>
        About Me
      </Text>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div ref={cardRef} variants={item}>
          <Card mt={50} shadow="xl" padding="sm" radius="lg" withBorder>
            <Flex
              sx={{ marginBottom: 10 }}
              align="center"
              justify="space-between"
              direction="row"
            >
              <Flex>
                <Avatar
                  variant="filled"
                  radius="xl"
                  size="lg"
                  color="teal"
                  src={myImg}
                />
                <Flex sx={{ marginLeft: 10 }} direction="column">
                  <Text size={16} weight={800}>
                    Vidarshan R.
                  </Text>
                  <Text size={12} weight={600}>
                    Software Engineer
                  </Text>
                  <Text size={12} weight={600}>
                    Computing Graduate
                  </Text>
                </Flex>
              </Flex>
              <motion.div variants={container}>
                <Flex sx={{ marginLeft: 10 }} direction="row" align="center">
                  <motion.div variants={item}>
                    <Tooltip label="Download resume" withArrow>
                      <ActionIcon
                        sx={{ marginLeft: 8 }}
                        color="lime"
                        radius="xl"
                        variant="filled"
                        size="lg"
                      >
                        <HiOutlineDownload size={20} />
                      </ActionIcon>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    <Tooltip label="Gmail" withArrow>
                      <ActionIcon
                        sx={{ marginLeft: 8 }}
                        color="red"
                        radius="xl"
                        variant="filled"
                        size="lg"
                      >
                        <IoMail size={20} />
                      </ActionIcon>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    <Tooltip label="Linkedin" withArrow>
                      <ActionIcon
                        sx={{ marginLeft: 8 }}
                        color="blue"
                        radius="xl"
                        variant="filled"
                        size="lg"
                      >
                        <AiFillLinkedin size={20} />
                      </ActionIcon>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    {colorScheme === "light" ? (
                      <Tooltip label="Github" withArrow>
                        <Githublight>
                          <BiGitBranch
                            color="#fff"
                            style={{ marginRight: 4 }}
                          />
                          <GithubdarkText>863</GithubdarkText>
                          <BiStar
                            color="#fff"
                            style={{ marginLeft: 4, marginRight: 4 }}
                          />
                          <GithubdarkText>18</GithubdarkText>
                          <ActionIcon
                            color="gray"
                            radius="xl"
                            variant="filled"
                            size="lg"
                          >
                            <SiGithub />
                          </ActionIcon>
                        </Githublight>
                      </Tooltip>
                    ) : (
                      <Githubdark>
                        <BiGitBranch
                          color="#e9ecef"
                          style={{ marginRight: 4 }}
                        />

                        <GithublightText>863</GithublightText>
                        <BiStar
                          color={"#e9ecef"}
                          style={{ marginLeft: 4, marginRight: 4 }}
                        />
                        <GithublightText>18</GithublightText>

                        <ActionIcon
                          color="gray"
                          radius="xl"
                          variant="filled"
                          size="lg"
                        >
                          <SiGithub />
                        </ActionIcon>
                      </Githubdark>
                    )}
                  </motion.div>
                  <motion.div variants={item}>
                    <HoverCard width={280} shadow="md" withArrow>
                      <HoverCard.Target>
                        {colorScheme === "light" ? (
                          <Stackoverflowlight>
                            <BiTrophy color="#fff" style={{ marginRight: 4 }} />
                            <StackoverflowdarkText>544</StackoverflowdarkText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowdarkText>1</StackoverflowdarkText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowdarkText>10</StackoverflowdarkText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowdarkText>20</StackoverflowdarkText>
                            <ActionIcon
                              color="orange"
                              radius="xl"
                              variant="filled"
                              size="lg"
                            >
                              <SiStackoverflow />
                            </ActionIcon>
                          </Stackoverflowlight>
                        ) : (
                          <Stackoverflowdark>
                            <BiTrophy
                              color="#fff"
                              style={{ marginRight: 4 }}
                            />
                            <StackoverflowlightText>544</StackoverflowlightText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowlightText>1</StackoverflowlightText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowlightText>10</StackoverflowlightText>
                            <BiMedal
                              color="#fff"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            />
                            <StackoverflowlightText>20</StackoverflowlightText>
                            <ActionIcon
                              color="orange"
                              radius="xl"
                              variant="filled"
                              size="lg"
                            >
                              <SiStackoverflow />
                            </ActionIcon>
                          </Stackoverflowdark>
                        )}
                      </HoverCard.Target>
                      <HoverCard.Dropdown
                        style={{
                          backgroundColor: "#3c3c3c",
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        <Text size="sm">
                          My Stackoverflow reputation, gold, silver, and bronze
                          medial I've aquired through my interactions with their
                          site.
                        </Text>
                        <Flex direction="row" justify="flex-end">
                          <Anchor href="https://mantine.dev/" target="_blank">
                            View Account
                          </Anchor>
                        </Flex>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </motion.div>
                </Flex>
              </motion.div>
            </Flex>
            <Divider my="sm" />
            <Blockquote icon={<ImQuotesLeft />} cite="">
              <Text size="md" weight={600}>
                I'm a Software Engineer who likes to see things being built one
                line of code at a time. Well organised and prefers to have
                incremental self-development based on the knowledge gained.{" "}
                <br />
                <br /> I have nearly 3 years of industry experience, and I am
                gaining more knowledge day-by-day, as I am a quick learner who
                likes to implement and make use of the knowledge gained, in
                order to create great things.
                <br />
                <br /> I'm currently working with javascript and typescript
                based frameworks such as React, React Native, Node JS, Express
                JS and much more.
                <br />
                <br /> My goal is to create high quality software products
                written with quality code and based on unique ideas, which will
                have a positive impact and make positive changes in the
                day-to-day lives of people. <br />
                <br />
                I'm also working towards my target of becoming a great software
                engineer among the best software engineers."
              </Text>
            </Blockquote>
          </Card>
          <motion.div variants={item}>
            <Card
              sx={{ marginTop: 30, marginBottom: 20 }}
              shadow="xl"
              padding="sm"
              radius="lg"
              withBorder
            >
              <Text sx={{ marginBottom: 12 }} size="sm" weight={700}>
                Languages
              </Text>
              <Group position="apart">
                {technologies.map((technology) => {
                  return (
                    <Badge
                      key={technology.id}
                      color={technology.color}
                      size="md"
                      variant="filled"
                    >
                      {technology.name}
                    </Badge>
                  );
                })}
              </Group>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutPage;
