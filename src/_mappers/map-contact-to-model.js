export const mapContactToModel = (contact) => {
  return {
    ...contact,
    firstName: contact.first_name,
    lastName: contact.last_name,
    fullName: `${contact.first_name} ${contact.last_name}`,
  };
};
