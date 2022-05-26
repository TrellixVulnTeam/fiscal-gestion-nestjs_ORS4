import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ConstanciaService } from './constancias.service';


@Controller('constancia/constancias')
export class ConstanciaController {
  constructor(private readonly constService: ConstanciaService) {}

  @Get(':empresa')
  findAll(@Param('empresa') empresa: string) {
    return this.constService.getReporte(empresa);
  }

  @Post('email')
  saveEmailDiferencia(@Body() email : string){
    console.log('post email', email);
    return this.constService.saveEmailDiferencia(email)
  }

}
