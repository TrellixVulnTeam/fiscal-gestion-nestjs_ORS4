import { Module } from '@nestjs/common';

import { getConnectionOptions } from 'typeorm';
import { RfcsModule } from './sat/rfcs/rfcs.module';
import { Rfc } from './sat/entities/rfc.entity';
import { RecursosModule } from './eslabon/recursos/recursos.module';
import { Recurso } from './eslabon/entities/recurso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DelegacionMunicipio } from './eslabon/entities/delegacion-municipio.entity';
import { Estado } from './eslabon/entities/estado.entity';
import { Empleado } from './eslabon/entities/empleado.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'rfcs',
      useFactory: async () =>
        Object.assign(await getConnectionOptions('rfcs'), {
          entities: [Rfc],
        }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'eslabon',
      useFactory: async () =>
        Object.assign(await getConnectionOptions('eslabon'), {
          entities: [Recurso, DelegacionMunicipio, Estado, Empleado],
        }),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    RfcsModule,
    RecursosModule,
    AuthModule,
  ],
})
export class AppModule {}
