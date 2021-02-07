import { v4 as uuid } from 'uuid';

export class UuidFactory {
  public static generate(): string {
    return uuid();
  }
}