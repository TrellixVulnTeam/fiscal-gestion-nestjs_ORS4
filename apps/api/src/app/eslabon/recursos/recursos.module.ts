import { Module } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { RecursosController } from './recursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurso } from '../entities/recurso.entity';
import { DelegacionMunicipio } from '../entities/delegacion-municipio.entity';
import { Estado } from '../entities/estado.entity';
import { Empleado } from '../entities/empleado.entity';
import { Rfc } from '../../sat/entities/rfc.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Recurso, DelegacionMunicipio, Estado, Empleado],
      'eslabon'
    ),
  ],
  controllers: [RecursosController],
  providers: [RecursosService],
  exports: [TypeOrmModule],
})
export class RecursosModule {}
