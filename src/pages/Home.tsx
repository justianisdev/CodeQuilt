/**
 * @file Home.tsx
 * @brief The homepage for the site.
 * @author @justianisdev
 * @author @Zentiph
 *
 * @copyright Copyright (C) 2025  CodeQuilt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Footer from "../components/Footer";
import Navbar from "../components/nav/Navbar";

import "./Home.css";

/**
 * @returns Homepage
 */
const Home = () => {
  return (
    <>
      <Navbar />

      <header>
        <img src="/code-quilt-logo.svg" alt="CodeQuilt" />
        <h1>CodeQuilt</h1>
        <div id="tagline">
          A collection of <em>byte</em>‑sized web projects
        </div>
      </header>

      {/* TODO: sort games by x */}
      {/* Note from Zen: Maybe move this ^ to the browse page and simply display featured games on the main page? */}
      {/* TODO: games */}

      <Footer />
    </>
  );
};

export default Home;
