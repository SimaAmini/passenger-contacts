import { SearchBox } from "../components/search-box";
import { Table } from "../components/table/table";
import { columns } from "./columns";
import { FrequentlyContacts } from "./frequently-contacts";
import { useContactList } from "./use-contact-list";

export const ContactList = () => {
  const {
    contactList,
    goToContactDetail,
    frequentlyVisitedContacts,
    isLoading,
  } = useContactList();

  return (
    <>
      {frequentlyVisitedContacts.length && (
        <FrequentlyContacts contacts={frequentlyVisitedContacts} />
      )}
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
