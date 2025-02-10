import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {}

    async create(data) {
        return data
    }
}
