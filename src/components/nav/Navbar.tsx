/**
 * @file Navbar.tsx
 * @brief The navbar header for the pages other than projects.
 *
 * @author @Zentiph
 */

import "./Navbar.css";
import Link from "./Link";

function Navbar() {
  return (
    <nav>
      <Link href="index.html">
        <img
          className="grow-on-hover"
          src="/code-quilt-logo-accent.svg"
          alt="CodeQuilt"
        />
      </Link>

      {/* TODO: UPDATE THESE LINKS WHEN AVAILABLE */}
      <ul>
        <li>
          {/* Browse all games rather than the select few displayed on the homepage */}
          <Link href="#">
            <span className="grow-on-hover">Browse</span>
          </Link>{" "}
        </li>
        <li>
          {/* About this project and the devs */}
          <Link href="#">
            <span className="grow-on-hover">About</span>
          </Link>
        </li>
      </ul>
    </nav>

    // <nav>
    //   <div className="container">
    //     <a href="index.html">
    //       <img src="/code-quilt-logo.svg" alt="CodeQuilt" />
    //     </a>

    //     <ul>
    //       <li>
    //         <a href="">About CodeQuilt</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
