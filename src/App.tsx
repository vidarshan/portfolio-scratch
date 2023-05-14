import {
  ActionIcon,
  Affix,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
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
  useWindowScroll,
} from "@mantine/hooks";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import Testimonials from "./pages/Testimonials";
import ReachOut from "./pages/ReachOut";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeSwitchContainer, AppShell } from "./styles/Main";

function App() {
  const [scroll, scrollTo] = useWindowScroll();
  const largeScreen = useMediaQuery("(min-width: 60em)");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
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
            <NavigationBar />
            <CoverPage />
            <AboutPage />
            <WorkPage />
            <ProjectPage />
            <Testimonials />
            <ReachOut />
          </Container>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
