import { FindLoginUserRequest } from "./findLoginUserRequest";
import { FindLoginUserResponse } from "./findLoginUserResponse";
import { Usecase } from "@/core/application/seedwork";

export interface FindLoginUserUsecase extends Usecase<FindLoginUserRequest, FindLoginUserResponse> {}