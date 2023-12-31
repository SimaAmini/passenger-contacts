import { mapContactToModel } from "../_mappers/map-contact-to-model";
import { Request } from "../config/request";

export const getContact = async (id) => {
  const contact = await Request.get(`/passenger/${id}`);
  return mapContactToModel(contact);
};
