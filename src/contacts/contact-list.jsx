import { SearchBox, Table } from "@components";
import { FrequentlyContacts } from "./components/frequently-contacts";
import { useContactList } from "./use-contact-list";
import { columns } from "./columns";

export const ContactList = () => {
  const {
    contactList,
    isLoading,
    pageCount,
    pagination,
    goToContactDetail,
    onPaginationChange,
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
