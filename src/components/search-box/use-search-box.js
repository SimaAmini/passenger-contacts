import { useRef } from "react";

import { getContacts } from "../../_services/get-contacts";
import { useContactStore } from "../../store/contact-store";

export const useSearchBox = () => {
  const { setContacts } = useContactStore();

  const inputRef = useRef();
  const selectRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const input = formData.get("searchInput");
    const type = formData.get("search-type");

    getContacts({ input, type }).then((contacts) => {
      setContacts(contacts);
    });
  };

  const handleClearForm = () => {
    inputRef.current.value = "";
    selectRef.current.value = "lastName";
  };

  return { handleSubmit, handleClearForm, inputRef, selectRef };
};
