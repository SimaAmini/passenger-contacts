import { getContacts } from "../_services/get-contacts";
import { useQuery } from "../config/use-query";

export const useContactList = () => {
  const { data: contactList, isLoading } = useQuery({
    queryFn: () => getContacts(),
    queryKey: ["contact-list"],
  });

  return { contactList, isLoading };
};
