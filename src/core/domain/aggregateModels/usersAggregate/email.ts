import { ValueObject } from "../../seedwork";

export class Email implements ValueObject {
  public email: string;

  public constructor(email: string) {
    this.email = email;
  }
}