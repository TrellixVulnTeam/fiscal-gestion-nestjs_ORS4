import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendMail(email: any) {
        console.log('mail service', email)

        await this.mailerService.sendMail({
            to: email.email,
            subject: 'Diferencia en tu Información Fiscal **IMPORTANTE**',
            template: '/email',
            context: {
                name: email.name
            }
        })
    }
}