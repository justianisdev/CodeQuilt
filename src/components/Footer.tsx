/**
 * @file Footer.tsx
 * @brief The footer for the main site pages.
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

import "./Footer.css";

/**
 * The footer for the main site.
 */
const Footer = () => {
  return (
    <footer>
      <div id="byline">
        Made with love by the CodeQuilt team &hearts; {/* Heart symbol */}
      </div>
      <div id="copyright">&copy; 2025 CodeQuilt</div>
    </footer>
  );
};

export default Footer;
