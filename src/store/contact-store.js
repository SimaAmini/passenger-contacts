import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContactStore = create(
  persist(
    (set, get) => ({
      contacts: [],
      setContacts: (contacts) => set(() => ({ contacts })),
      getContacts: () => get((state) => [...state.contacts]),
      setLastVisited: (contactId) =>
        set((state) => {
          const index = state.contacts.findIndex(
            (contact) => contact.id == contactId,
          );
          state.contacts[index].lastVisited = Date.now();
          return { contacts: [...state.contacts] };
        }),
    }),
    {
      name: "contacts",
    },
  ),
);
