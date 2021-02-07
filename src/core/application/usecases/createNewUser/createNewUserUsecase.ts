import { CreateNewUserRequest } from "./createNewUserRequest";
import { CreateNewUserResponse } from "./createNewUserResponse";
import { Usecase } from "@/core/application/seedwork";

export interface CreateNewUserUsecase extends Usecase<CreateNewUserRequest, CreateNewUserResponse> {}