import { User } from "@/core/domain/aggregateModels";
import { Response } from "@/core/application/seedwork";

export interface CreateNewUserResponse extends Response {
  data: User;
}