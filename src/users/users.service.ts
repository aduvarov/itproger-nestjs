import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'Ivan', bio: 'some info' },
        { id: 2, name: 'Alex', bio: 'some info' },
    ];
    getAllUsers(): { id: number; name: string; bio: string }[] {
        return this.users;
    }

    getUserById(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) throw new NotFoundException('Пользователь не найден');
        return user;
    }

    createUser(body: CreateUserDTO): { id: number; name: string; bio: string } {
        const newUser = {
            id: this.users.length + 1,
            name: body.name,
            bio: body.bio,
        };
        this.users.push(newUser);
        return newUser;
    }
}
