import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recurso } from '../entities/recurso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecursosService {
  constructor(
    @InjectRepository(Recurso, 'eslabon')
    private readonly recursoRepository: Repository<Recurso>
  ) {}

  findAllActive() {
    return this.recursoRepository.find({
      where: { empleado: { estatus: 1 } },
      relations: ['municipio', 'estado', 'empleado'],
    });
  }

  findOne(rfc: string) {
    const parsedRfc = `${rfc.substring(0, 4)}-${rfc.substring(
      4,
      10
    )}-${rfc.substring(10, 13)}`;
    return this.recursoRepository.find({
      where: { curp: parsedRfc, empleado: { estatus: 1 } },
      relations: ['municipio', 'estado', 'empleado'],
    });
  }
}
