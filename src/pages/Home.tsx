/**
 * @file Home.tsx
 * @brief The homepage for the site.
 *
 * @author @justianisdev
 * @author @Zentiph
 */

// this is simply an outline of the home page for the time being...

import Navbar from "../components/nav/Navbar";

import "./Home.css";

/**
 * @returns Homepage
 */
const Home = () => {
  return (
    <>
      <Navbar />

      <h1>Code Quilt</h1>
      <div id="tagline">
        A collection of <em>byte</em>-sized web projects!
      </div>
      {/* sort games by x */}
      {/* games */}
      {/* footer */}

      {/* will implement later */}
    </>
  );
};

export default Home;
