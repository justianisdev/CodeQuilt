/**
 * @file SearchQuery.tsx
 * @brief The search bar and search submit button in a form.
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

/**
 * IMPORTANT:
 *
 * THIS FILE IS CURRENTLY UNUSED SINCE COMPONENTS
 * GOT MOVED AROUND BUT DO NOT DELETE IT!
 *
 * IT WILL BE REUSED LATER!
 */

import { useState } from "react";
import "./SearchQuery.css";

/**
 * A URL that can be used in a form's action attribute.
 */
type ActionURL =
  | `${"http" | "https"}://${string}`
  | `/${string}`
  | `#${string}`;

/**
 * @param action The action to enact after completing the form
 * @param method The method to use for form submission
 *
 * @returns      Search bar and search submit button in an HTML form
 */
const SearchQuery = ({
  action,
  method,
}: {
  action: ActionURL;
  method: "GET" | "POST";
}) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <form action={action} method={method} className="search">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`${isDropdownVisible ? "rotated" : ""}`}
        id="dropdown-button"
      >
        <img src="/dropdown.svg" className="transition" alt="Dropdown arrow" />
      </button>

      <label htmlFor="search">Search for a project</label>
      <input
        type="text"
        placeholder="Find a project..."
        id="search"
        name="search"
        className={`transition ${isSearchVisible ? "visible" : "hidden"}`}
      ></input>

      <button
        type="button"
        onClick={toggleSearch}
        className={`transition ${isSearchVisible ? "rotated" : ""}`}
        id="search-button"
      >
        <img src="/search.svg" alt="Search" />
      </button>
    </form>
  );
};

export default SearchQuery;
