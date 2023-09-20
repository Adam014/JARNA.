import React, {useState} from "react";
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import News from "./News";
import Analytics from "./Analytics";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("Main");

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
      setDarkMode(prevState => !prevState)
  }

  const handleComponentChange = (componentName) => {
      // Handle component change
      setActiveComponent(componentName);
  };

  return (

    <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        {activeComponent === "Main" && <Main darkMode={darkMode} activeComponent={activeComponent} handleComponentChange={handleComponentChange} />}
        {activeComponent === "About" && <About darkMode={darkMode} activeComponent={activeComponent} handleComponentChange={handleComponentChange} />}
        {activeComponent === "News" && <News darkMode={darkMode}  activeComponent={activeComponent} handleComponentChange={handleComponentChange} />}
        {activeComponent === "Analytics" && <Analytics darkMode={darkMode}  activeComponent={activeComponent} handleComponentChange={handleComponentChange} />}
    </div>
  );
}