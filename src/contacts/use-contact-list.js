import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getContacts } from "../_services/get-contacts";
import { useContactStore } from "../store/contact-store";
import { useQuery } from "../config/use-query";

export const useContactList = () => {
  const navigate = useNavigate();

  const { setContacts, getContacts: getContactsFromStore } = useContactStore();
  const contacts = getContactsFromStore();

  const goToContactDetail = ({ id }) => navigate(`/contact/${id}`);

  const { data, isLoading } = useQuery({
    queryFn: () => getContacts(),
    queryKey: ["contact-list"],
  });

  useEffect(() => {
    if (data) setContacts(data);
  }, [data]);

  return {
    contactList: contacts,
    isLoading,
    goToContactDetail,
  };
};
