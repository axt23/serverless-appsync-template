import { Repository } from "@/core/domain/seedwork";
import { User } from "./user";

export interface UsersRepository extends Repository<User> {}