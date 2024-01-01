import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getContacts } from "../_services/get-contacts";
import { useContactStore } from "../store/contact-store";
import { useQuery } from "../config/use-query";
import { usePagination } from "../components/table/use-pagination";

export const useContactList = () => {
  const navigate = useNavigate();

  const { limit, onPaginationChange, skip, pagination } = usePagination();
  const {
    setContacts,
    getContacts: getContactsFromStore,
    getMeta,
  } = useContactStore();

  const contacts = getContactsFromStore();
  const goToContactDetail = ({ id }) => navigate(`/contact/${id}`);

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getContacts({ skip, limit }),
    queryKey: ["contact-list"],
  });

  useEffect(() => {
    if (data) setContacts(data);
  }, [data]);

  const pageCount = Math.round(getMeta()?.total / limit);

  useEffect(() => {
    refetch();
  }, [skip, limit]);

  return {
    contactList: contacts,
    isLoading,
    goToContactDetail,
    pageCount,
    onPaginationChange,
    pagination,
  };
};
