// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import { User } from '../../src/app/users/entities/user.entity';

// @Injectable()
// export class MailService {

//     constructor(private mailerService: MailerService) {}

//     async sendUserConfirmation(user: User, token: string) {
        
//         const url = `example.com/auth/confirm?token=${token}`;

//         await this.mailerService.sendMail({
//             to: "daniel.martinez@alliax.com",
//             subject: 'Welcome to Nice App! Confirm your Email',
//             template: '/confirmation', 
//             context: { 
//                 name: user.nombre,
//                 url,
//             },
//         });
//     }
// }