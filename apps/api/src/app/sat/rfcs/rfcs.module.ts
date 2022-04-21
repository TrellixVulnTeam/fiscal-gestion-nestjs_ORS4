import { Module } from '@nestjs/common';
import { RfcsService } from './rfcs.service';
import { RfcsController } from './rfcs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rfc } from '../entities/rfc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rfc], 'rfcs')],
  controllers: [RfcsController],
  providers: [RfcsService],
  exports: [TypeOrmModule],
})
export class RfcsModule {}
