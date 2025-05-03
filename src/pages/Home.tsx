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

import GameCard from "../components/GameCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./Home.css";

/**
 * @returns Homepage
 */
const Home = () => {
  return (
    <>
      <Navbar />
      <div id="content-wrapper">
        <header>
          <img src="/code-quilt-logo.svg" alt="CodeQuilt" />
          <h1>CodeQuilt</h1>
          <div id="tagline">
            A collection of <em>byte</em>‑sized web projects
          </div>
        </header>

        <main>
          <h2>Featured Projects</h2>

          <section id="featured-games">
            <GameCard
              imgSrc="https://placehold.co/600x400"
              alt="Game picture"
              title="Test1"
              desc="Test1 desc"
            />

            <GameCard
              imgSrc="https://placehold.co/600x400"
              alt="Game picture"
              title="Test2"
              desc="Test2 desc"
            />

            <GameCard
              imgSrc="https://placehold.co/600x400"
              alt="Game picture"
              title="Test3"
              desc="Test3 desc"
            />

            <GameCard
              imgSrc="https://placehold.co/600x400"
              alt="Game picture"
              title="Test4"
              desc="Test4 desc"
            />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
