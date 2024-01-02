import { EnvelopIcon, MessageIcon, PhoneIcon } from "@assets/svg-icons";

import { useContactDetail } from "./use-contact-detail";

export const ContactDetail = () => {
  const { contactInfo, isLoading } = useContactDetail();
  if (!contactInfo) return null;

  const labelValues = [
    {
      label: "Phone",
      value: contactInfo.phone,
    },
    {
      label: "Email",
      value: contactInfo.email,
    },
    {
      label: "Address",
      value: contactInfo.address,
    },
    {
      label: "Gender",
      value: contactInfo.gender,
    },
    {
      label: "Note",
      value: contactInfo.note,
    },
    {
      label: "Telegram ID",
      value: contactInfo.telegram,
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="w-full space-y-4 flex flex-col">
        <div className="card">
          <div className="card-body w-full">
            <div className="flex flex-col items-center gap-4">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-32 rounded-full">
                    <img src={contactInfo.avatar} />
                  </div>
                </div>
              </figure>
              <div className="items-center text-center">
                <h2 className="font-bold text-lg">{contactInfo.fullName}</h2>
                <p className="">{contactInfo.company}</p>
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
            <div className="divider"></div>
            <div>
              {labelValues.map((item) => (
                <div className="flex flex-nowrap space-y-4 flex-row w-full">
                  <div className="basis-1/4">
                    <p className="font-bold">{item.label}:</p>
                  </div>
                  <div className="basis-2/4">
                    <p>{item.value || "-"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
