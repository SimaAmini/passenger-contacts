import { mapContactToModel } from "@mappers/map-contact-to-model";
import { Request } from "@core/request";

export const getContact = async (id) => {
  const contact = await Request.get(`/passenger/${id}`);
  return mapContactToModel(contact);
};
