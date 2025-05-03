/**
 * @file Navbar.tsx
 * @brief The component header for the pages other than projects.
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

import { useState } from "react";

import Link from "./Link";

import "./Navbar.css";

/**
 * Navbar header for the pages other than projects.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container">
        <div id="left-nav">
          <div id="logo">
            <Link href="/">
              <img
                className="grow-on-hover"
                src="/code-quilt-icon-accent-bold.svg"
                alt="CodeQuilt"
              />
            </Link>
          </div>
          <ul className={menuOpen ? "show" : ""}>
            {/* TODO: UPDATE THESE LINKS WHEN AVAILABLE */}
            <li>
              {/* Browse all games rather than the select few displayed on the homepage */}
              <Link href="#">
                <span className="grow-on-hover">Browse</span>
              </Link>
            </li>
            <li>
              {/* About this project and the devs */}
              <Link href="#">
                <span className="grow-on-hover">Meet the Team</span>
              </Link>
            </li>
          </ul>
        </div>

        <div id="right-nav">
          <ul>
            <li>
              <Link
                href="https://github.com/justianisdev/CodeQuilt"
                className="img-link"
              >
                <img
                  src="/github.svg"
                  alt="CodeQuilt GitHub"
                  className="grow-on-hover"
                />
              </Link>
            </li>
            <li>
              <Link href="https://ko-fi.com/zentiph" className="img-link">
                <img
                  src="/ko-fi.svg"
                  alt="CodeQuilt Ko-Fi for donations"
                  className="grow-on-hover"
                />
              </Link>
            </li>
          </ul>
        </div>

        <button id="hamburger" onClick={toggleMenu}>
          <img src="/burger-menu.svg" alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
