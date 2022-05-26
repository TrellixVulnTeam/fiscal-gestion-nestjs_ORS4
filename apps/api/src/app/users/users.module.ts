import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController,MailController } from './users.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join, resolve } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';
import Mail = require('nodemailer/lib/mailer');

@Module({
  controllers: [UsersController, MailController],
  providers: [UsersService, MailService],
  imports: [MailerModule.forRootAsync({
    imports: [ConfigModule],

    useFactory: async (config: ConfigService) => ({
      transport: {
        host: config.get('MAIL_HOST'),
        secure: false,
        port: config.get('MAIL_PORT'),
        auth: {
          user: config.get('MAIL_USER'),
          pass: config.get('MAIL_PASSWORD'),
        },
      },
      defaults: {
        from: config.get('MAIL_FROM')
      },
      template: {

        dir: join(__dirname, './templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    }),
    inject: [ConfigService]
  }), ConfigModule.forRoot()],
})

export class UsersModule {}
