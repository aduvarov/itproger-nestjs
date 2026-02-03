import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    getAllUsers() {
        return this.userRepository.find();
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOneBy({ id });

        if (!user) throw new NotFoundException('Пользователь не найден');
        return user;
    }

    async createUser(body: CreateUserDTO) {
        const name = body.name;
        const bio = body.bio;
        const user = this.userRepository.create({ name, bio });
        await this.userRepository.save(user);

        return user;
    }
}
