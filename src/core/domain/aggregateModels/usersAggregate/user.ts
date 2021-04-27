import { AggregateRoot } from "@/core/domain/seedwork";
import { UuidUtility } from "@/core/domain/utils";
import { Email } from "./email";

export class User implements AggregateRoot {
  public id: string;
  public email: Email;
  public familyName: string;
  public givenName: string;
  public displayName: string | undefined;

  public constructor(
    id: string | undefined,
    email: string,
    familyName: string,
    givenName: string,
    displayName: string = undefined,
  ) {
    this.id = id ?? UuidUtility.generate();
    this.email = new Email(email);
    this.familyName = familyName;
    this.givenName = givenName;
    this.displayName = displayName;
  }
}