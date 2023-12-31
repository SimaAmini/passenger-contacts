export const mapContactsToModel = (contacts) => {
  return contacts.map((contact) => ({
    id: contact.id,
    firstName: contact.first_name,
    lastName: contact.last_name,
    fullName: `${contact.first_name} ${contact.last_name}`,
    phone: contact.phone,
    avatar: contact.avatar,
    address: contact.address,
    lastVisited: null,
  }));
};
