import { User, UsersRepository } from "@/core/domain";
import { CreateNewUserRequest, CreateNewUserResponse, CreateNewUserUsecase } from "@/core/application/";
import { inject, injectable } from "inversify";

@injectable()
export class CreateNewUserInteractor implements CreateNewUserUsecase {
  private usersRepository: UsersRepository;

  public constructor(@inject('UsersRepository') usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async handle(request: CreateNewUserRequest): Promise<CreateNewUserResponse> {
    const { email, familyName, givenName, displayName } = request;

    const newUser = new User(undefined, email, familyName, givenName, displayName);
    await this.usersRepository.add(newUser);
    
    return { data: newUser };
  }
}