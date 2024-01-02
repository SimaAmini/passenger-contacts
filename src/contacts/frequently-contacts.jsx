import { Link } from "react-router-dom";

import { useFreqContacts } from "../store/freq-store";
import { EnvelopIcon, MessageIcon, PhoneIcon } from "../assets/svg-icons";

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

const ContactCard = ({ contact }) => {
  return (
    <Link to={`/contact/${contact.id}`}>
      <div className="card bg-neutral text-neutral-content shadow-xl w-100">
        <div className="flex flex-col items-center gap-4">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src={contact.avatar} />
              </div>
            </div>
          </figure>
          <div className="items-center text-center">
            <h2 className="font-bold text-lg">{contact.fullName}</h2>
            <div className="">
              <button className="btn btn-ghost btn-circle">
                <PhoneIcon />
              </button>
              <button className="btn btn-ghost btn-circle">
                <EnvelopIcon />
              </button>
              <button className="btn btn-ghost btn-circle">
                <MessageIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
