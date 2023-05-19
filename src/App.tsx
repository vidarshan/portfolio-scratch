import {
  ActionIcon,
  Affix,
  Box,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
  Text,
  Transition,
  rem,
} from "@mantine/core";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import CoverPage from "./pages/CoverPage";
import AboutPage from "./pages/AboutPage";
import {
  useHotkeys,
  useLocalStorage,
  useMediaQuery,
  useScrollIntoView,
  useWindowScroll,
} from "@mantine/hooks";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import Testimonials from "./pages/Testimonials";
import ReachOut from "./pages/ReachOut";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  BiBriefcaseAlt2,
  BiCategory,
  BiHomeAlt,
  BiMessageAlt,
  BiMoon,
  BiSun,
  BiTrophy,
  BiUser,
} from "react-icons/bi";
import { ThemeSwitchContainer, AppShell } from "./styles/Main";
import { Link } from "react-scroll";
import { useEffect, useMemo, useRef } from "react";
import { NavigationBarContainer } from "./styles/NavigationBar";
import { NavigationItemContainer } from "./styles/NavigationItemContainer";
import { Notifications } from "@mantine/notifications";

function App() {
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const pageRef = useRef<HTMLDivElement>(null);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const scrollPositions: Array<any> = useMemo(() => [], []);
  const [scroll, scrollTo] = useWindowScroll();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    const aboutSectionElementPosition =
      document.getElementById("aboutSection")?.offsetTop;

    const workSectionElementPosition =
      document.getElementById("workSection")?.offsetTop;

    const projectsSectionElementPosition =
      document.getElementById("projectsSection")?.offsetTop;

    const testimonialsSectionElementPosition = document.getElementById(
      "testimonialsSection"
    )?.offsetTop;

    const reachOutSectionElementPosition =
      document.getElementById("reachOutSection")?.offsetTop;

    scrollPositions.push({ section: "home", position: 0 });
    scrollPositions.push({
      section: "about",
      position: aboutSectionElementPosition,
    });
    scrollPositions.push({
      section: "work",
      position: workSectionElementPosition,
    });
    scrollPositions.push({
      section: "projects",
      position: projectsSectionElementPosition,
    });
    scrollPositions.push({
      section: "testimonials",
      position: testimonialsSectionElementPosition,
    });
    scrollPositions.push({
      section: "reachOut",
      position: reachOutSectionElementPosition,
    });
  }, [scrollPositions]);

  const getPositionRange = (windowScroll: number, scroll: number) => {
    if (windowScroll <= scroll) {
      return "red";
    } else {
      return "blue";
    }
  };

  console.log("scrollPositions[1]", scrollPositions[1]?.position);
  console.log("window.scrollY", window.scrollY);

  return (
    <Box ref={pageRef}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications position="top-center" />
          <AppShell>
            <ThemeSwitchContainer>
              <ActionIcon
                color="yellow"
                size={largeScreen ? "lg" : "sm"}
                radius="xl"
                variant="outline"
                onClick={() =>
                  setColorScheme(colorScheme === "dark" ? "light" : "dark")
                }
              >
                {colorScheme === "light" ? (
                  <BiSun size={largeScreen ? 20 : 14} />
                ) : (
                  <BiMoon size={largeScreen ? 20 : 14} />
                )}
              </ActionIcon>
            </ThemeSwitchContainer>
            <Container>
              <Affix position={{ bottom: rem(20), right: rem(20) }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                  {(transitionStyles) => (
                    <ActionIcon
                      color={colorScheme === "dark" ? "gray" : "gray"}
                      radius="xl"
                      variant="filled"
                      size={largeScreen ? "lg" : "sm"}
                      style={transitionStyles}
                      onClick={() => scrollTo({ y: 0 })}
                    >
                      <AiOutlineArrowUp size={20} />
                    </ActionIcon>
                  )}
                </Transition>
              </Affix>
              <NavigationBarContainer background={colorScheme}>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[0]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[0].position })}
                  >
                    <BiHomeAlt size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[1]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[1].position })}
                  >
                    <BiUser size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[2]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[2].position })}
                  >
                    <BiBriefcaseAlt2 size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[3]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[3].position })}
                  >
                    <BiCategory size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[4]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[4].position })}
                  >
                    <BiTrophy size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
                <NavigationItemContainer>
                  <ActionIcon
                    color={getPositionRange(
                      window.scrollY,
                      scrollPositions[5]?.position
                    )}
                    size={largeScreen ? "lg" : "md"}
                    radius="xl"
                    variant="filled"
                    onClick={() => scrollTo({ y: scrollPositions[5].position })}
                  >
                    <BiMessageAlt size={largeScreen ? 18 : 14} />
                  </ActionIcon>
                </NavigationItemContainer>
              </NavigationBarContainer>

              <Box id="home">
                <CoverPage />
              </Box>
              <Box id="aboutSection">
                <AboutPage />
              </Box>
              <Box id="workSection">
                <WorkPage />
              </Box>
              <Box id="projectsSection">
                <ProjectPage />
              </Box>
              <Box id="testimonialsSection">
                <Testimonials />
              </Box>
              <Box id="reachOutSection">
                <ReachOut />
              </Box>
            </Container>
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </Box>
  );
}

export default App;
