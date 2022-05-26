// import { MailerModule } from '@nestjs-modules/mailer'; 
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { Global, Module } from '@nestjs/common';
// import { MailService } from './mail.service';
// import { join } from 'path';
// import { ConfigService } from '@nestjs/config';


// @Module({
//     imports: [
//       MailerModule.forRootAsync({
//           useFactory: async (config: ConfigService) => ({
//             transport: {
//               host: config.get('smtp.office365.com'),
//               secure: false,
//               auth: {
//                 user: config.get('sendmail2@alliax.com'),
//                 pass: config.get('zQVRzPWnKS7mD159q0m5Dn5k'),
//               },
//             }, 
//             defaults: {
//                 from: `"No Reply" <${config.get('sendmail2@alliax.com')}>`,
//             },
//             template: {
//                 dir: join(__dirname, './templates'),
//                 adapter: new HandlebarsAdapter(),
//                 options: {
//                   strict: true,
//                 },
//             },
//           }),
//         inject: [ConfigService],
//       }),
//     ],
//     // providers: [MailService],
//     // exports: [MailService],
// })
// export class MailModule {}


