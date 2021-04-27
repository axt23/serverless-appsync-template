import { v4 as uuid } from 'uuid';

export class UuidUtility {
  public static generate(): string {
    return uuid();
  }
}