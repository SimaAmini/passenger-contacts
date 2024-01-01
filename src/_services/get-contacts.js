import { mapContactsToModel } from "../_mappers/map-contacts-to-model";
import { Request } from "../config/request";

export const getContacts = async ({ input, type, skip, limit }) => {
  const createParams = () => {
    if (!type || !input) return null;

    if (type === "firstName")
      return {
        first_name: { contains: input },
      };
    if (type === "lastName")
      return {
        last_name: { contains: input },
      };
    if (type === "phone")
      return {
        phone: { contains: input },
      };
  };

  const generatedParams = createParams();

  const paginationParams = {
    skip,
    limit,
  };
  const params = generatedParams && { where: JSON.stringify(generatedParams) };
  const contacts = await Request.get(`/passenger/`, {
    ...params,
    ...paginationParams,
  });

  return mapContactsToModel(contacts);
};
