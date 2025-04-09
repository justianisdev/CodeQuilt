/**
 * @file SearchQuery.tsx
 * @brief The search bar and search submit button in a form.
 *
 * @author @Zentiph
 */

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
  return (
    <form action={action} method={method} className="search">
      <label htmlFor="search">Search for a project</label>
      <input
        type="text"
        placeholder="Find a project..."
        id="search"
        name="search"
        className="transition-on-hover"
      ></input>

      <button type="submit" className="transition-on-hover">
        <img src="/search.svg" alt="Search" />
      </button>
    </form>
  );
};

export default SearchQuery;
