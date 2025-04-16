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
 * @file Navbar.tsx
 * @brief The navbar header for the pages other than projects.
 *
 * @author @Zentiph
 */

import { useState } from "react";

import Link from "./Link";

import "./Navbar.css";

/**
 * @returns Navbar header for the pages other than projects
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div id="left-nav">
        <div id="logo">
          <Link href="/">
            <img
              className="transition grow-on-hover"
              src="/code-quilt-logo-accent-bold.svg"
              alt="CodeQuilt"
            />
          </Link>
        </div>
        <ul className={menuOpen ? "show" : ""}>
          {/* TODO: UPDATE THESE LINKS WHEN AVAILABLE */}
          <li>
            {/* Browse all games rather than the select few displayed on the homepage */}
            <Link href="#">
              <span className="transition grow-on-hover">Browse</span>
            </Link>
          </li>
          <li>
            {/* About this project and the devs */}
            <Link href="#">
              <span className="transition grow-on-hover">Meet the Team</span>
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
                className="transition grow-on-hover"
              />
            </Link>
          </li>
          <li>
            <Link href="https://ko-fi.com/zentiph" className="img-link">
              <img
                src="/ko-fi.svg"
                alt="CodeQuilt Ko-Fi for Donations"
                className="transition grow-on-hover"
              />
            </Link>
          </li>
        </ul>
      </div>

      <button id="hamburger" onClick={toggleMenu}>
        <img src="/burger-menu.svg" alt="Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
