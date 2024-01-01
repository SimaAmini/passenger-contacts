import { getContacts } from "../../_services/get-contacts";
import { useContactStore } from "../../store/contact-store";

export const SearchBox = () => {
  const { setContacts } = useContactStore();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const input = formData.get("searchInput");
    const type = formData.get("search-type");

    getContacts(input, type).then((res) => {
      setContacts(res);
    });
  };

  return (
    <div className="flex justify-center w-full my-2">
      <form onSubmit={handleSubmit}>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Start typing..."
            name="searchInput"
          />
          <select
            className="select select-bordered max-w-xs join-item"
            name="search-type"
            defaultValue={"lastName"}
          >
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="phone">Phone Number</option>
          </select>
          <button className="btn btn-primary join-item " type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
