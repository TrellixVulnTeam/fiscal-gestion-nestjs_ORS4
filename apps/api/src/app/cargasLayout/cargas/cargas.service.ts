import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CargaLayout } from '../entities/carga.entity';

@Injectable()
export class CargaService {
  constructor(
    @InjectRepository(CargaLayout, 'cargas')
    private readonly cargaRepository: Repository<CargaLayout>
  ) {}

  async saveEmailDiferencia(email: any){
    console.log('email service final', email);
    
    const results = await this.cargaRepository.query('EXEC postEmailsDiferencias @0', email)
    return results;
  }

}
