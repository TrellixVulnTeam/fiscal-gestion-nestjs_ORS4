import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CargaService } from './cargas.service';

@Controller('carga/cargas')
export class CargaController {
  constructor(private readonly CargaService: CargaService) {}


  @Post()
  saveEmailDiferencia(@Body() email : any){
    console.log('post works');
    return this.CargaService.saveEmailDiferencia([email])
  }

}


