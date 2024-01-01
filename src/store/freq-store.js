import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useContactStore } from "./contact-store";
import { sortByKey } from "../utils";

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
    contacts[index].lastVisited = Date.now();

    const list = sima([...freqContacts, contacts[index]]);
    setFreqContacts(list);
  };

  return { setLastVisited, getFreqContacts };
};

const sima = (list) => {
  const sorted = sortByKey(list, "lastVisited");
  return sorted.slice(0, 4);
};
