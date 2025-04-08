/**
 * @file App.tsx
 * @brief The main file for the application.
 *
 * Author(s): Zentiph
 */

import Navbar from "./components/nav/Navbar";
import Home from "./pages/home";

import "./App.css";

/**
 * 
 *  USE THIS FILE FOR ROUTING NOT HOME PAGE DISPLAYS
 * 
 * 
 * 
 * 
 */
function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
