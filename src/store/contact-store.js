import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useContactStore = create(
  persist(
    (set, get) => ({
      contacts: [],
      meta: {},

      setContacts: (data) => {
        const { contacts, meta } = data;
        set(() => ({ contacts }));
        set(() => ({ meta }));
      },
      getContacts: () => get().contacts,

      setMeta: (meta) => set(() => ({ meta })),
      getMeta: () => get().meta,
    }),
    {
      name: "contacts",
    },
  ),
);
