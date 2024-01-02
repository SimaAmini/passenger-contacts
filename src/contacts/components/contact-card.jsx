import { Link } from "react-router-dom";

import { EnvelopIcon, MessageIcon, PhoneIcon } from "@assets/svg-icons";

export const ContactCard = ({ contact }) => {
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
