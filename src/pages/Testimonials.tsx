import {
  ActionIcon,
  Avatar,
  Blockquote,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
  Tooltip,
} from "@mantine/core";
import { BsGlobe2 } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Flex direction="column" justify="center" sx={{ height: "100%" }}>
        <Text mb={20} weight={600} size={40}>
          Testimonials
        </Text>
        <Grid>
          {testimonials.map((item) => {
            return (
              <Grid.Col key={item.id} xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card shadow="sm" radius="md" withBorder>
                  <Flex direction="row" justify="space-between">
                    <Flex>
                      <Avatar
                        variant="filled"
                        radius="xl"
                        size="md"
                        color="teal"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                      />
                      <Flex sx={{ marginLeft: 10 }} direction="column">
                        <Text size={16} weight={800}>
                          {item.name}
                        </Text>
                        <Text size={12} weight={600}>
                          {item.designation}
                        </Text>
                      </Flex>
                    </Flex>
                    <Tooltip
                      label={`View ${
                        item.type === "website" ? "Site" : "Profile"
                      }`}
                      withArrow
                    >
                      <ActionIcon
                        color={item.type === "website" ? "orange" : "blue"}
                        radius="xl"
                        variant="filled"
                        size="lg"
                      >
                        {item.type === "website" ? (
                          <BsGlobe2 />
                        ) : (
                          <SiLinkedin />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  </Flex>
                  <Divider my="sm" />
                  <Blockquote
                    icon={<ImQuotesLeft />}
                    sx={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {item.description}
                  </Blockquote>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Testimonials;
