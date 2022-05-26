import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Rfc } from '../entities/rfc.entity';

@Injectable()
export class RfcsService {
  constructor(
    @InjectRepository(Rfc, 'rfcs')
    private readonly Rfc: Repository<Rfc>
  ) {}

  findAll(rfcs: string[]) {

    return this.Rfc.createQueryBuilder('r')
      .select('r.rfc, r.codigo_postal')
      .where('r.rfc in (:...sat)', { rfcs })
      .getRawMany();
      
  }

  async findOne(rfc: string): Promise<any> {
    const results = await this.Rfc.query('EXEC getRfcInfo @0', [rfc]);
    console.log(JSON.stringify(results));
    
    return results[0] ? results[0] : {};
  }

  // async getReporte(empresa: string) {
  //   const results = await this.Rfc.query('EXEC getReporteConstancias @0', [empresa]);
    
  //   return results;
  // }

  async postOne(empleado: any) {

    const results = await this.Rfc.query(
      'EXEC postRfcInfo @0, @1, @2, @3, @4, @5, @6, @7, @8, @9 ,@10 ,@11 ,@12,@13,@14,@15',
      [
        empleado[0].idEmpresa,
        empleado[0].NumEmp,
        empleado[0].Nombre,
        empleado[0].PrimerApellido,
        empleado[0].SegundoApellido,
        empleado[0].CalleNum,
        empleado[0].Num,
        empleado[0].Colonia,
        empleado[0].Municipio,
        empleado[0].Estado,
        empleado[0].Nacionalidad,
        empleado[0].CP,
        empleado[0].RFC,
        empleado[0].CURP,
        empleado[0].Email,
        empleado[0].NombreCompleto,
      ]
    );

    return results;
  }
}
