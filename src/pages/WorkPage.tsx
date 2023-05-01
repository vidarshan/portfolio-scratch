import {
  Badge,
  Card,
  Container,
  Divider,
  Group,
  Text,
  Timeline,
} from "@mantine/core";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const WorkPage = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Text weight={600} size={40}>
        Work Experience
      </Text>
      <Timeline active={4} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<RiNumber1 />}>
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Text color="dimmed" size="sm">
              Intern Software Engineer
            </Text>
            <Text size="xs" mt={4}>
              Excalibur Systems
            </Text>
            <Text size="xs" mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <Text size="xs" mt={4}>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </Text>
            <Text size="xs" mt={4}>
              Designed user Interfaces and implemented the designs with code.
            </Text>
            <Text size="xs" mt={4}>
              Built completely new web applications for small-mid scale
              businesses.
            </Text>
            <Text size="xs" mt={4}>
              Gained knowledge on deploying applications to the web.
            </Text>
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
        <Timeline.Item bullet={<RiNumber2 />}>
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Text color="dimmed" size="sm">
              Intern Software Engineer
            </Text>
            <Text size="xs" mt={4}>
              Excalibur Systems
            </Text>
            <Text size="xs" mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <Text size="xs" mt={4}>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </Text>
            <Text size="xs" mt={4}>
              Designed user Interfaces and implemented the designs with code.
            </Text>
            <Text size="xs" mt={4}>
              Built completely new web applications for small-mid scale
              businesses.
            </Text>
            <Text size="xs" mt={4}>
              Gained knowledge on deploying applications to the web.
            </Text>
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
            <Text color="dimmed" size="sm">
              Intern Software Engineer
            </Text>
            <Text size="xs" mt={4}>
              Excalibur Systems
            </Text>
            <Text size="xs" mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <Text size="xs" mt={4}>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </Text>
            <Text size="xs" mt={4}>
              Designed user Interfaces and implemented the designs with code.
            </Text>
            <Text size="xs" mt={4}>
              Built completely new web applications for small-mid scale
              businesses.
            </Text>
            <Text size="xs" mt={4}>
              Gained knowledge on deploying applications to the web.
            </Text>
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
        <Timeline.Item bullet={<RiNumber3 />}>
          <Card shadow="xl" padding="sm" radius="lg" withBorder>
            <Text color="dimmed" size="sm">
              Intern Software Engineer
            </Text>
            <Text size="xs" mt={4}>
              Excalibur Systems
            </Text>
            <Text size="xs" mt={4}>
              2020-08 ~ 2021-04
            </Text>
            <Text size="xs" mt={4}>
              Contributed to existing web applications based on React JS, to
              extend and improve their functionality.
            </Text>
            <Text size="xs" mt={4}>
              Designed user Interfaces and implemented the designs with code.
            </Text>
            <Text size="xs" mt={4}>
              Built completely new web applications for small-mid scale
              businesses.
            </Text>
            <Text size="xs" mt={4}>
              Gained knowledge on deploying applications to the web.
            </Text>
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
