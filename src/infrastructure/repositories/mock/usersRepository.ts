import { injectable } from 'inversify';
import { User, UsersRepository } from '@/core/domain';

@injectable()
export class MockUsersRepository implements UsersRepository {
  public async find(id: string): Promise<User> {
    console.log('mock find executed!')
    return new User(id, 'mock@email.com', 'Tanaka', 'Taro');
  }

  public async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  public async add(_: User): Promise<undefined> {
    console.log('mock add executed!')
    return undefined;
  }

  public async update(_: User): Promise<undefined> {
    throw new Error('Method not implemented.');
  }

  public async delete(_: User): Promise<undefined> {
    throw new Error('Method not implemented.');
  }
}
