import { useParams } from "react-router-dom";

import { getContact } from "../_services/get-contact";
import { useQuery } from "../config/use-query";
import { useEffect } from "react";
import { useFreqContacts } from "../store/freq-store";

export const useContactDetail = () => {
  const { id } = useParams();
  const { setLastVisited } = useFreqContacts();

  const { data: contactInfo, isLoading } = useQuery({
    queryFn: () => getContact(id),
    queryKey: ["contact-info"],
  });

  useEffect(() => {
    setLastVisited(id);
  }, []);

  return { contactInfo, isLoading };
};
