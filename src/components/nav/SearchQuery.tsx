/**
 * @file SearchQuery.tsx
 * @brief The search bar and search submit button in a form.
 *
 * @author @Zentiph
 */

import "./SearchQuery.css";

/**
 * @param action The action to enact after completing the form;
 *               The form is submitted with the POST method
 *
 * @returns      Search bar and search submit button in an HTML form
 */
function SearchQuery({ action }: { action: string }) {
  return (
    <form action={action} method="post" className="search">
      <label htmlFor="search-bar">Search for a project</label>
      <input
        type="text"
        placeholder="Find a project..."
        id="search-bar"
        name="search-bar"
      ></input>

      <button type="submit">
        <img src="/search.svg" alt="Search" />
      </button>
    </form>
  );
}

export default SearchQuery;
