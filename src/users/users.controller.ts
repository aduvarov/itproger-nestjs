import { Body, Controller, Get, Param, Post, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './create-user.dto';
import { AuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get('about')
    getAllUsersAbout(): string {
        return 'All Users About';
    }

    @Get('search')
    findUsers(@Query('name') name: string, @Query('age') age: string) {
        return `The user with: ${name} and age: ${age}`;
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() body: CreateUserDTO) {
        return this.usersService.createUser(body);
    }
}
