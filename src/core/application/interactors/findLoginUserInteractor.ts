import { UsersRepository } from "@/core/domain/aggregateModels";
import { FindLoginUserRequest, FindLoginUserResponse, FindLoginUserUsecase } from "@/core/application";
import { inject, injectable } from "inversify";

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
    // TODO: Failure pattern
    if (findResult.isFailure()) {
      return { data: undefined };
    }

    const user = findResult.value;

    return { data: user };
  }
}