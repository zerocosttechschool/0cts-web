import { useMutation } from "@tanstack/react-query";

import { clientAPI } from "@/lib/api";
import { CreateWaitListDto } from "../types/dto";
import { WaitListEntity } from "../types/entity";

const createWaitList = async (dto: CreateWaitListDto) => {
  const { data } = await clientAPI.post<WaitListEntity>(`/waitlist`, dto);
  return data;
};

export const useCreateWaitList = () => {
  return useMutation<WaitListEntity, Error, CreateWaitListDto>({
    mutationFn: (dto) => createWaitList(dto),
  });
};
