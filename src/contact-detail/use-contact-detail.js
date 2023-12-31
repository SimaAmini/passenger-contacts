import { useParams } from "react-router-dom";

import { getContact } from "../_services/get-contact";
import { useQuery } from "../config/use-query";
import { useContactStore } from "../store/contact-store";
import { useEffect } from "react";

export const useContactDetail = () => {
  const { id } = useParams();
  const { setLastVisited } = useContactStore();

  const { data: contactInfo, isLoading } = useQuery({
    queryFn: () => getContact(id),
    queryKey: ["contact-info"],
  });

  useEffect(() => {
    setLastVisited(id);
  }, []);

  return { contactInfo, isLoading };
};
