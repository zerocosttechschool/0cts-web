import { WaitListEntity } from "./entity";

export type CreateWaitListDto = Pick<WaitListEntity, "email">;
