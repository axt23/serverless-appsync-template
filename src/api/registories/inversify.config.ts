import "reflect-metadata";
import { Container } from 'inversify';
import {
  CreateNewUserInteractor,
  CreateNewUserUsecase,
  FindLoginUserInteractor,
  FindLoginUserUsecase
} from "@/core/application";
import {
  UsersRepository,
} from "@/core/domain";
import {
  MockUsersRepository,
} from "@/infrastructure";

const container = new Container();
// Usecases
container
  .bind<CreateNewUserUsecase>('CreateNewUserUsecase')
  .to(CreateNewUserInteractor);
container
  .bind<FindLoginUserUsecase>('FindLoginUserUsecase')
  .to(FindLoginUserInteractor);
// Repositories
container
  .bind<UsersRepository>('UsersRepository')
  .to(MockUsersRepository);

export { container }