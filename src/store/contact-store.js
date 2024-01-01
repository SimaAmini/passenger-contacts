import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContactStore = create(
  persist(
    (set, get) => ({
      contacts: [],

      setContacts: (contacts) => set(() => ({ contacts })),
      getContacts: () => get().contacts,
    }),
    {
      name: "contacts",
    },
  ),
);
