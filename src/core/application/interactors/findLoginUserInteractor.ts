import "reflect-metadata";
import { UsersRepository } from "@/core/domain/aggregateModels";
import { FindLoginUserRequest, FindLoginUserResponse, FindLoginUserUsecase } from "@/core/application";
import { inject, injectable } from "inversify";
import { ApplicationError } from "../errors";

@injectable()
export class FindLoginUserInteractor implements FindLoginUserUsecase {
  private usersRepository: UsersRepository;

  public constructor(@inject('UsersRepository') usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async handle(_: FindLoginUserRequest): Promise<FindLoginUserResponse> {
    // TODO: Get id from access token
    const id = 'mockuuid';

    const findResult = await this.usersRepository.find(id);
    if (findResult.isFailure()) {
      throw new ApplicationError('Not exist user!', 1);
    }

    const user = findResult.value;

    return {
      id: user.id,
      email: user.email.email,
      familyName: user.familyName,
      givenName: user.givenName,
      displayName: user.displayName,
    };
  }
}