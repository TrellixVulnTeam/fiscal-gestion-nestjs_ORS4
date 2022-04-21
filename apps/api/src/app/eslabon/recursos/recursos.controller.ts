import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { RecursosService } from './recursos.service';

@Controller('eslabon/recursos')
export class RecursosController {
  constructor(private readonly recursosService: RecursosService) {}

  @Get()
  findAll() {
    return this.recursosService.findAllActive();
  }

  @Get(':rfc')
  async findOne(@Param('rfc') rfc: string) {
    const [recurso] = await this.recursosService.findOne(rfc.toUpperCase());
    if (!recurso) {
      throw new HttpException('Recurso no encontrado', HttpStatus.NOT_FOUND);
    }
    return recurso;
  }
}
