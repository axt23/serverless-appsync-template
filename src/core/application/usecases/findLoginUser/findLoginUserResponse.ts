import { Response } from "@/core/application/seedwork";

export interface FindLoginUserResponse extends Response {
  id: string;
  email: string;
  familyName: string;
  givenName: string;
  displayName: string | undefined;
}