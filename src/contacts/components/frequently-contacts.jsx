import { useFreqContacts } from "../../store/freq-store";
import { ContactCard } from "./contact-card";

export const FrequentlyContacts = () => {
  const { getFreqContacts } = useFreqContacts();
  const contacts = getFreqContacts();

  if (!contacts.length) return null;

  return (
    <div className="flex flex-row space-x-10 justify-center items-center my-6">
      {contacts.map((contact) => (
        <ContactCard contact={contact} />
      ))}
    </div>
  );
};
