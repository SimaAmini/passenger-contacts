import { mapContactToModel } from "../_mappers/map-contact-to-model";
import { Request } from "../config/request";

export const getContact = async ({ passengerId }) => {
  const contact = await Request.get(`/passengers/${passengerId}`);
  return mapContactToModel(contact);
};
