/**
 * @file App.tsx
 * @brief The main file for the application.
 *
 * @author @justianisdev
 * @author @Zentiph
 */

import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";

import "./App.css";

/**
 *
 *  USE THIS FILE FOR ROUTING NOT HOME PAGE DISPLAYS
 *
 *
 *
 *
 */

/**
 * @returns Application
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
