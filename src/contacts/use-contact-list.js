import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { getContacts } from "../_services/get-contacts";
import { useQuery } from "../config/use-query";
import { useContactStore } from "../store/contact-store";
import { sortByKey } from "../utils";
import { FrequentlyContacts } from "./frequently-contacts";

export const useContactList = () => {
  const navigate = useNavigate();

  const { setContacts, getContacts: getContactsFromStore } = useContactStore();
  const { contacts } = getContactsFromStore();

  const goToContactDetail = ({ id }) => navigate(`/contact/${id}`);

  const { data, isLoading } = useQuery({
    queryFn: () => getContacts(),
    queryKey: ["contact-list"],
  });

  useEffect(() => {
    if (!contacts.length && data) setContacts(data);
  }, [contacts, data]);

  const getVisitedContacts = () =>
    contacts.filter((contact) => contact.lastVisited);

  const frequentlyVisitedContacts = useMemo(() => {
    const visitedContacts = getVisitedContacts(contacts);

    if (!visitedContacts.length) return [];

    const sorted = sortByKey(visitedContacts, "lastVisited");

    return sorted.slice(0, 4);
  }, [contacts]);

  const contactList = useMemo(() => {
    if (!frequentlyVisitedContacts.length) return contacts;

    const filtered = contacts.filter(
      (contact) =>
        !frequentlyVisitedContacts.find(({ id }) => contact.id === id) &&
        contact,
    );

    return filtered;
  }, [contacts, frequentlyVisitedContacts]);

  return {
    contactList,
    frequentlyVisitedContacts,
    isLoading,
    goToContactDetail,
  };
};
