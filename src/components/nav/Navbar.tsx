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
        <img src="/code-quilt-logo-accent.svg" alt="CodeQuilt" />
      </Link>

      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">About</Link>
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
