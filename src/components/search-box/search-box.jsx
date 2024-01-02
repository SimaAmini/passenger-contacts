import { useSearchBox } from "./use-search-box";

export const SearchBox = () => {
  const { handleSubmit, handleClearForm, inputRef, selectRef } = useSearchBox();

  return (
    <div className="flex justify-center w-full my-2 bg-neutral py-6">
      <form onSubmit={handleSubmit}>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Start typing..."
            name="searchInput"
            ref={inputRef}
          />
          <select
            className="select select-bordered max-w-xs join-item"
            name="search-type"
            defaultValue={"lastName"}
            ref={selectRef}
          >
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="phone">Phone Number</option>
          </select>
          <button className="btn btn-primary join-item " type="submit">
            Search
          </button>
          <button className="btn btn-link" onClick={handleClearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
