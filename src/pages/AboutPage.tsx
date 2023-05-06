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
} from "@mantine/core";
import { SiGmail, SiLinkedin, SiGithub, SiStackoverflow } from "react-icons/si";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";
import { BiGitBranch, BiMedal, BiStar, BiTrophy } from "react-icons/bi";
import { useRef, useState } from "react";

const AboutPage = () => {
  const cardRef: any = useRef();
  const [focus, setFocus] = useState(false);

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

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Text weight={600} size={40}>
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
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
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
                    <Tooltip label="Gmail" withArrow>
                      <ActionIcon
                        sx={{ marginLeft: 8 }}
                        color="red"
                        radius="xl"
                        variant="light"
                        size="lg"
                      >
                        <SiGmail />
                      </ActionIcon>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    <Tooltip label="Linkedin" withArrow>
                      <ActionIcon
                        sx={{ marginLeft: 8 }}
                        color="blue"
                        radius="xl"
                        variant="light"
                        size="lg"
                      >
                        <SiLinkedin />
                      </ActionIcon>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    <Tooltip label="Github" withArrow>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "rgba(248, 249, 250, 1)",
                          borderRadius: "30px",
                          paddingLeft: "10px",
                          marginLeft: "8px",
                        }}
                      >
                        <BiGitBranch
                          color="#868e96"
                          style={{ marginRight: 4 }}
                        />

                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#868e96",
                          }}
                        >
                          863
                        </div>
                        <BiStar
                          color="#868e96"
                          style={{ marginLeft: 4, marginRight: 4 }}
                        />
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#868e96",
                          }}
                        >
                          18
                        </div>

                        <ActionIcon
                          color="gray"
                          radius="xl"
                          variant="light"
                          size="lg"
                        >
                          <SiGithub />
                        </ActionIcon>
                      </div>
                    </Tooltip>
                  </motion.div>
                  <motion.div variants={item}>
                    <Tooltip label="Stackoverflow" withArrow>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "rgba(255, 244, 230, 1)",
                          borderRadius: "30px",
                          paddingLeft: "10px",
                          marginLeft: "8px",
                        }}
                      >
                        <BiTrophy color="#fd7e14" style={{ marginRight: 4 }} />

                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#fd7e14",
                          }}
                        >
                          544
                        </div>
                        <BiMedal
                          color="#fd7e14"
                          style={{ marginLeft: 4, marginRight: 4 }}
                        />
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#fd7e14",
                          }}
                        >
                          1
                        </div>
                        <BiMedal
                          color="#fd7e14"
                          style={{ marginLeft: 4, marginRight: 4 }}
                        />
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#fd7e14",
                          }}
                        >
                          10
                        </div>
                        <BiMedal
                          color="#fd7e14"
                          style={{ marginLeft: 4, marginRight: 4 }}
                        />
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#fd7e14",
                          }}
                        >
                          20
                        </div>
                        <ActionIcon
                          color="orange"
                          radius="xl"
                          variant="light"
                          size="lg"
                        >
                          <SiStackoverflow />
                        </ActionIcon>
                      </div>
                    </Tooltip>
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
              <Group>
                <Badge color="yellow" size="lg" variant="light">
                  Javascript
                </Badge>
                <Badge color="blue" size="lg" variant="light">
                  Typescript
                </Badge>{" "}
                <Badge color="yellow" size="lg" variant="light">
                  Python
                </Badge>{" "}
                <Badge color="blue" size="lg" variant="light">
                  React JS
                </Badge>{" "}
                <Badge color="blue" size="lg" variant="light">
                  React Native
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Next JS
                </Badge>{" "}
                <Badge color="green" size="lg" variant="light">
                  Node JS
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Express JS
                </Badge>{" "}
                <Badge color="blue" size="lg" variant="light">
                  MySQL
                </Badge>{" "}
                <Badge color="blue" size="lg" variant="light">
                  Postgres
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Mongo DB
                </Badge>{" "}
                <Badge color="green" size="lg" variant="light">
                  Bootstrap
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Redux
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Styled Components
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Version Control
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  NPM
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  Yarn
                </Badge>{" "}
                <Badge color="cyan" size="lg" variant="light">
                  SCSS
                </Badge>
              </Group>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AboutPage;
