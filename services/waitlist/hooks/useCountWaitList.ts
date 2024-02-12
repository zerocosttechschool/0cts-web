import { useQuery } from "@tanstack/react-query";

import { clientAPI } from "@/lib/api";

const countWaitList = async () => {
  const { data } = await clientAPI.get(`/waitlist/count`);

  return data;
};

export const useCountWaitList = () => {
  return useQuery<number, Error>({
    queryKey: ["countWaitList"],
    queryFn: () => countWaitList(),
    initialData: 0,
    refetchInterval: 20000,
  });
};
