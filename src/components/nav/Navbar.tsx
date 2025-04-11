/**
 * @file Navbar.tsx
 * @brief The navbar header for the pages other than projects.
 *
 * @author @Zentiph
 */

import Link from "./Link";

import "./Navbar.css";

/**
 * @returns Navbar header for the pages other than projects
 */
const Navbar = () => {
  return (
    <nav>
      <ul id="site-nav">
        <li id="logo">
          <Link href="/">
            <img
              className="transition grow-on-hover"
              src="/code-quilt-logo-accent-bold.svg"
              alt="CodeQuilt"
            />
          </Link>
        </li>
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

      <ul id="external-nav">
        <li>
          <Link href="https://ko-fi.com/zentiph" className="img-link">
            <img
              src="/ko-fi.svg"
              alt="CodeQuilt Ko-Fi for Donations"
              className="transition grow-on-hover"
            />
          </Link>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
