import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Alex' },
  ];
  getAllUsers(): { id: number; name: string }[] {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('Пользователь не найден');
    return user;
  }

  createUser(name: string): { id: number; name: string } {
    const newUser = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
}
