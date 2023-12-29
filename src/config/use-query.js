import { useQuery as ruseQuery } from "@tanstack/react-query";

const noop = () => undefined;

const useQuery = ({
  queryFn,
  initialData = noop,
  queryKey = ["NO_QUERY_KEY"],
  options = {},
}) => {
  return ruseQuery({
    queryKey,
    queryFn,
    initialData,
    ...options,
  });
};

export { useQuery };
