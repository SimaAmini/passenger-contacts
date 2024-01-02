import { SearchBox } from "../components/search-box";
import { Table } from "../components/table/table";
import { columns } from "./columns";
import { FrequentlyContacts } from "./components/frequently-contacts";
import { useContactList } from "./use-contact-list";

export const ContactList = () => {
  const {
    contactList,
    goToContactDetail,
    isLoading,
    pageCount,
    onPaginationChange,
    pagination,
  } = useContactList();
  return (
    <>
      <FrequentlyContacts />

      <SearchBox />
      <div className="container mx-auto px-4">
        <Table
          data={contactList}
          columns={columns}
          onRowClick={goToContactDetail}
          isLoading={isLoading}
          pageCount={pageCount}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        />
      </div>
    </>
  );
};
