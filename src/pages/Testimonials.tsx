import {
  Avatar,
  Blockquote,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
} from "@mantine/core";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Text weight={600} size={40}>
        Testimonials
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" radius="md" withBorder>
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
                  Vidarshan R.
                </Text>
                <Text size={12} weight={600}>
                  Software Engineer
                </Text>
              </Flex>
            </Flex>
            <Divider my="sm" />
            <Blockquote
              icon={<ImQuotesLeft />}
              sx={{ fontSize: "14px", fontWeight: 700 }}
            >
              Life is like an npm install – you never know what you are going to
              get.
            </Blockquote>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="sm" radius="md" withBorder>
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
                  Vidarshan R.
                </Text>
                <Text size={12} weight={600}>
                  Software Engineer
                </Text>
              </Flex>
            </Flex>
            <Divider my="sm" />
            <Blockquote
              sx={{ fontSize: "14px", fontWeight: 700 }}
              icon={<ImQuotesLeft />}
            >
              Life is like an npm install – you never know what you are going to
              get.
            </Blockquote>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Testimonials;
