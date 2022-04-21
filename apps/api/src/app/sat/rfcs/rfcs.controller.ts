import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RfcsService } from './rfcs.service';

@Controller('sat/rfcs')
export class RfcsController {
  constructor(private readonly rfcsService: RfcsService) {}

  @Post('listado')
  findAll(@Body('rfcs') rfcs: string[]) {
    return this.rfcsService.findAll(rfcs);
  }

  @Get(':rfc')
  findOne(@Param('rfc') rfc: string) {
    return this.rfcsService.findOne(rfc);
  }
}
