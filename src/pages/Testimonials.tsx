import { Card, Container, Grid, Text } from "@mantine/core";
import React from "react";

const Testimonials = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Text weight={600} size={40}>
        Testimonials
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              molestiae.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              molestiae.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Testimonials;
