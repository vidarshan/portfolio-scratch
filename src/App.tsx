import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import CoverPage from "./pages/CoverPage";
import AboutPage from "./pages/AboutPage";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";
import Testimonials from "./pages/Testimonials";
import ReachOut from "./pages/ReachOut";

function App() {
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
