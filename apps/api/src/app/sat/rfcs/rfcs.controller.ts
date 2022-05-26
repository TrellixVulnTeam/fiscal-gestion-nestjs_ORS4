import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RfcsService } from './rfcs.service';

@Controller('sat/rfcs')
export class RfcsController {
  constructor(private readonly rfcsService: RfcsService) {}

  //  @Post('listado')
  //  findAll(@Body('rfcs') rfcs: string[]) {
  //    return this.rfcsService.findAll(rfcs);
  //  }

  @Post()
  postOne(@Body() empleado: any){
    return this.rfcsService.postOne([empleado]);
  }

  @Get(':rfc')
  findOne(@Param('rfc') rfc: string) {
    return this.rfcsService.findOne(rfc);
  }

  // @Get('/empresa/:empresa')
  // getReporte(@Query('empresa') empresa: string) {
  //   console.log('get works', empresa);

  //   return this.rfcsService.getReporte(empresa);
  // }
}
