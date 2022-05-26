import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';



@Injectable()
export class AuthService {

    constructor() {}

    async signUp(user: User) {
        const token = Math.floor(1000 + Math.random() * 9000).toString();
        // create user in db
        // ...
        // send confirmation mail
        // await this.mailService.sendUserConfirmation(user, token);
    }
}