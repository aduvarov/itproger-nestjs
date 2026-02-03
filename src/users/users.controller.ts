import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): { id: number; name: string }[] {
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

  @Get(':id')
  getUserById(@Param('id') id: string): { id: number; name: string } {
    return this.usersService.getUserById(+id);
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.usersService.createUser(name);
  }
}
