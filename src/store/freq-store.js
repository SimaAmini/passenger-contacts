import { create } from "zustand";
import { persist } from "zustand/middleware";

import { useContactStore } from "./contact-store";
import { sortByKey } from "@utilities";

const useFreqContactStore = create(
  persist(
    (set, get) => ({
      freqContacts: [],

      setFreqContacts: (freqContacts) => set(() => ({ freqContacts })),
      getFreqContacts: () => get().freqContacts,
    }),
    {
      name: "freq-contacts",
    },
  ),
);

export const useFreqContacts = () => {
  const contacts = useContactStore((state) => state.contacts);

  const { freqContacts, setFreqContacts, getFreqContacts } =
    useFreqContactStore();

  const setLastVisited = (contactId) => {
    const index = contacts.findIndex((contact) => contact.id == contactId);
    if (index === -1) return;
    contacts[index].lastVisited = Date.now();

    const list = getFirst4Items(
      addToFreqContacts(freqContacts, contacts[index]),
    );

    setFreqContacts(list);
  };

  return { setLastVisited, getFreqContacts };
};

const getFirst4Items = (list) => {
  const sorted = sortByKey(list, "lastVisited");
  return sorted.slice(0, 4);
};

const addToFreqContacts = (list, selected) => {
  const index = list.findIndex((item) => item.id === selected.id);

  if (index === -1) return [...list, selected];

  list[index] = selected;

  return list;
};
