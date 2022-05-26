import { Module } from '@nestjs/common';
import { CargaService } from './cargas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargaController } from './cargas.controller';
import { CargaLayout } from '../entities/carga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CargaLayout], 'carga')],
  controllers: [CargaController],
  providers: [CargaService],
  exports: [TypeOrmModule],
})
export class CargasModule {}
