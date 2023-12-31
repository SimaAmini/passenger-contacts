import { useParams } from "react-router-dom";
import { getContact } from "../_services/get-contact";
import { useQuery } from "../config/use-query";

export const useContactDetail = () => {
  const { id } = useParams();

  const { data: contactInfo, isLoading } = useQuery({
    queryFn: () => getContact(id),
    queryKey: ["contact-info"],
  });
  console.log("contact :>> ", contactInfo);

  return { contactInfo, isLoading };
};
