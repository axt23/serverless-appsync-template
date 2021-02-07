import { User } from "@/core/domain/aggregateModels";
import { Response } from "@/core/application/seedwork";

export interface FindLoginUserResponse extends Response {
  user: User;
}