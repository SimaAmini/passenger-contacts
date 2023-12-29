import { mapContactsToModel } from "../_mappers/map-contacts-to-model";
import { Request } from "../config/request";

export const getContacts = async () => {
  const contacts = await Request.get("/passenger");
  return mapContactsToModel(contacts.items);
};
