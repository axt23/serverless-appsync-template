import { AggregateRoot } from "./aggregateRoot";

export interface Repository<T extends AggregateRoot> {
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  add(entity: T): Promise<undefined>;
  update(entity: T): Promise<undefined>;
  delete(entity: T): Promise<undefined>;
};