/**
 * @copyright Copyright (C) 2025 CodeQuilt
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
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
