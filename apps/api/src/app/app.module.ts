import { Module } from '@nestjs/common';
import { ConnectionOptions, getConnectionOptions } from 'typeorm';
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
import { CargaLayout } from './cargasLayout/entities/carga.entity';
import { Constancias } from './constancias/entities/constancia.entity';
import { ConstanciaModule } from './constancias/constancias/constancias.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'rfcs',
      useFactory: async () =>
        Object.assign(
          <ConnectionOptions>{
            type: 'mssql',
            host: '10.128.160.55',
            username: 'cfdiTools',
            password: 'Alliax$2014',
            database: 'CfdiTools',
            requestTimeout: 360000,
            synchronize: false,
            entities: ['dist/entity/**/*.js'],
            options: { trustServerCertificate: true },
          },
          {
            entities: [Rfc],
          }
        ),
      // Object.assign(await getConnectionOptions('rfcs'), {
      //   entities: [Rfc],
      // }),
    }),
    TypeOrmModule.forRootAsync({
      name: 'eslabon',
      useFactory: async () =>
        Object.assign(
          <ConnectionOptions>{
            type: 'mssql',
            host: '10.128.160.55',
            username: 'cfdiTools',
            password: 'Alliax$2014',
            database: 'CfdiTools',
            requestTimeout: 360000,
            synchronize: false,
            entities: ['dist/entity/**/*.js'],
            options: { trustServerCertificate: true },
          },
          {
            entities: [Recurso, DelegacionMunicipio, Estado, Empleado],
          }
        ),
    }),
    TypeOrmModule.forRootAsync({
      name: 'constancias',
      useFactory: async () =>
        Object.assign(
          <ConnectionOptions>{
            type: 'mssql',
            host: '10.128.160.55',
            username: 'cfdiTools',
            password: 'Alliax$2014',
            database: 'CfdiTools',
            requestTimeout: 360000,
            synchronize: false,
            entities: ['dist/entity/**/*.js'],
            options: { trustServerCertificate: true },
          },
          {
            entities: [Constancias],
          }
        ),
    }),
    ConfigModule.forRoot({
      
    }),

    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    RfcsModule,
    RecursosModule,
    AuthModule,
    ConstanciaModule,
  ],
})
export class AppModule {}
