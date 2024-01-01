import { SearchBox } from "../components/search-box";
import { Table } from "../components/table/table";
import { columns } from "./columns";
import { FrequentlyContacts } from "./frequently-contacts";
import { useContactList } from "./use-contact-list";

export const ContactList = () => {
  const { contactList, goToContactDetail, isLoading } = useContactList();

  return (
    <>
      <FrequentlyContacts />

      <SearchBox />
      <Table
        data={contactList}
        columns={columns}
        onRowClick={goToContactDetail}
        isLoading={isLoading}
      />
    </>
  );
};
