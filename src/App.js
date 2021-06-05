import { useEffect, useState } from "react";

// COMPONENTS
import Nav from "./components/Nav";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./components/footer";

// STYLES
import GlobalStyle from "./components/GlobalStyle";

function App() {
  // DARKMODE
  const InitialMode = () => {
    // CHECKING DEVICE THEME
    const DeviceTheme = GetPreferedColorScheme();
    // check if the user has set a preferred theme
    const UserPreference = "darkMode" in localStorage;
    const SavedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (UserPreference) {
      return SavedMode;
    } else if (DeviceTheme) {
      return true;
    } else {
      return false;
    }
  };

  const GetPreferedColorScheme = () => {
    if (!window.matchMedia) return;
    //  returning device theme
    return window.matchMedia("(prefers-color-scheme : dark").matches;
  };

  // Dark Mode Status
  const [darkMode, setDarkMode] = useState(InitialMode);

  // SET THE THEME TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="App">
      <GlobalStyle darkMode={darkMode} />
      <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
      <Welcome />
      <About />
      <Project darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
