import { SearchBox } from "../components/search-box";
import { Table } from "../components/table/table";
import { columns } from "./columns";
import { useContactList } from "./use-contact-list";

export const ContactList = () => {
  const { contactList } = useContactList();

  return (
    <>
      <SearchBox />

      <Table data={contactList} columns={columns} />
    </>
  );
};
