import { Request } from "@/core/application/seedwork";

export interface CreateNewUserRequest extends Request {
  email: string;
  familyName: string;
  givenName: string;
  displayName: string;
}