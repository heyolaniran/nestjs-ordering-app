import { Body, Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async createUser(@Body() data ) {
    return this.usersService.create(data)
  }
}
