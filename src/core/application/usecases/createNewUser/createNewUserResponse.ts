import { Response } from "@/core/application/seedwork";

export interface CreateNewUserResponse extends Response {
  id: string;
  email: string;
  familyName: string;
  givenName: string;
  displayName: string | undefined;
}