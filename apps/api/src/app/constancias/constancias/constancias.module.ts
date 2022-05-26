import { Module } from '@nestjs/common';
import { ConstanciaService } from './constancias.service';
import { ConstanciaController } from './constancias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constancias } from '../entities/constancia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Constancias], 'constancias')],
  controllers: [ConstanciaController],
  providers: [ConstanciaService],
  exports: [TypeOrmModule],
})
export class ConstanciaModule {}