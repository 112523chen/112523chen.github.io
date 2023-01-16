import DisplayButton from "./components/DisplayButton/DisplayButton";
import Main from "./components/Main/Main";
import "./styles/main.css";
import { projectData } from "./assets/data/projectData.json";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const colorState = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState<string>(colorState);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <div className="App">
      <DisplayButton mode={mode} setMode={setMode} />
      <Main projectData={projectData} mode={mode} />
      <Footer mode={mode} />
    </div>
  );
};

export default App;
