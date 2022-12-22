import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user: User) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user: User) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const indexOfUser = this.users.findIndex(
      (user: User) => user.id === receivedUser.id
    );

    this.users[indexOfUser].admin = true;
    this.users[indexOfUser] = receivedUser;
    this.users[indexOfUser].updated_at = new Date();

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
