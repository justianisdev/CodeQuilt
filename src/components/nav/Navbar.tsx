/**
 * @file Navbar.tsx
 * @brief The navbar header for the pages other than projects.
 *
 * @author @Zentiph
 */

import Link from "./Link";
import SearchQuery from "./SearchQuery";

import "./Navbar.css";

/**
 * @returns Navbar header for the pages other than projects
 */
const Navbar = () => {
  return (
    <nav>
      <div id="left-nav">
        <div id="logo">
          <Link href="/">
            <img
              className="transition-on-hover grow-on-hover"
              src="/code-quilt-logo-accent.svg"
              alt="CodeQuilt"
            />
          </Link>
        </div>

        {/* TODO: UPDATE THESE LINKS WHEN AVAILABLE */}
        <ul>
          <li>
            {/* Browse all games rather than the select few displayed on the homepage */}
            <Link href="#">
              <span className="transition-on-hover grow-on-hover">Browse</span>
            </Link>
          </li>
          <li>
            {/* About this project and the devs */}
            <Link href="#">
              <span className="transition-on-hover grow-on-hover">
                Meet the Team
              </span>
            </Link>
          </li>
          <li>
            {/* MONEY BABY WO-HOO */}
            <Link href="#">
              <span className="transition-on-hover grow-on-hover">
                Buy us a Coffee
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <SearchQuery action="#" method="GET" />
      {/* TODO: eventually... action="search-processor.php"*/}
    </nav>
  );
};

export default Navbar;
