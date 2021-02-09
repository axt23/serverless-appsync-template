import { injectable } from 'inversify';
import { User, UsersRepository } from '@/core/domain';
import { Result, Success } from '@/core/domain/seedwork/result';

@injectable()
export class MockUsersRepository implements UsersRepository {
  public async find(id: string): Promise<Result<User, undefined>> {
    console.log('mock find executed!')
    const mockUser = new User(id, 'mock@email.com', 'Tanaka', 'Taro');
    return new Success(mockUser);
  }

  public async findAll(): Promise<Result<User[], undefined>> {
    throw new Error('Method not implemented.');
  }

  public async add(_: User): Promise<Result<undefined, undefined>> {
    console.log('mock add executed!')
    return new Success(undefined);
  }

  public async update(_: User): Promise<Result<undefined, undefined>> {
    throw new Error('Method not implemented.');
  }

  public async delete(_: User): Promise<Result<undefined, undefined>> {
    throw new Error('Method not implemented.');
  }
}
