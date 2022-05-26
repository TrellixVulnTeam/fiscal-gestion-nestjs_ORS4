import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RfcsService } from './rfcs.service';

@Controller('sat/rfcs')
export class RfcsController {
  constructor(private readonly rfcsService: RfcsService) {}

  @Post()
  postOne(@Body() empleado: any){
    console.log(empleado);
    
    return this.rfcsService.postOne([empleado]);
  }

  @Get(':rfc')
  findOne(@Param('rfc') rfc: string) {
    return this.rfcsService.findOne(rfc);
  }

  @Get(':rfc')
  findAll(@Param('rfc') rfc: string) {
    return this.rfcsService.findOne(rfc);
  }
}
