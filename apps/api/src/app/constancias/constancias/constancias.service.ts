import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Constancias } from '../entities/constancia.entity';


@Injectable()
export class ConstanciaService {
  constructor(
    @InjectRepository(Constancias, 'constancias')
    private readonly Constancias: Repository<Constancias>
  ) {}

  async getReporte(empresa: string) {
    const results = await this.Constancias.query('EXEC getReporteConstancias @0', [empresa]);
    return results;
  }

  async saveEmailDiferencia(email: any){
    console.log(email);
    
    const results = await this.Constancias.query('EXEC postEmailsDiferencias @0', email);
    return results;
  }

 
}
