import React, { useState } from "react";
import './index.sass';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import News from "./components/News";
import Analytics from "./components/Analytics";
import Circle from "./components/Circle";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("Main");

  const handleComponentChange = (componentName) => {
      // Handle component change
      setActiveComponent(componentName);
  };


  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
      setDarkMode(prevState => !prevState)
  }

  console.log(activeComponent)

  return (

    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {activeComponent === "Main" && <Main darkMode={darkMode}  />}
      {activeComponent === "About" && <About darkMode={darkMode}  />}
      {activeComponent === "News" && <News darkMode={darkMode}   />}
      {activeComponent === "Analytics" && <Analytics darkMode={darkMode}   />}
      <Circle activeComponent={activeComponent} handleComponentChange={handleComponentChange} darkMode={darkMode}/>
    </div>
  );
}