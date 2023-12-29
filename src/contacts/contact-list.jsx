import { Table } from "../components/table/table";
import { columns } from "./columns";
import { useContactList } from "./use-contact-list";

export const ContactList = () => {
  const { contactList } = useContactList();

  return <Table data={contactList} columns={columns} />;
};
