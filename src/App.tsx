import {
  ActionIcon,
  Affix,
  Button,
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
import { useHotkeys, useLocalStorage, useWindowScroll } from "@mantine/hooks";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import Testimonials from "./pages/Testimonials";
import ReachOut from "./pages/ReachOut";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [scroll, scrollTo] = useWindowScroll();

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
        <Container>
          <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <ActionIcon
                  color="green"
                  radius="xl"
                  variant="filled"
                  size="xl"
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
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
