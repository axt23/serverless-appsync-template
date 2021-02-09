import { AggregateRoot } from "./aggregateRoot";
import { Result } from "./result";

export interface Repository<T extends AggregateRoot> {
  find(id: string): Promise<Result<T, undefined>>;
  findAll(): Promise<Result<T[], undefined>>;
  add(entity: T): Promise<Result<undefined, undefined>>;
  update(entity: T): Promise<Result<undefined, undefined>>;
  delete(entity: T): Promise<Result<undefined, undefined>>;
};