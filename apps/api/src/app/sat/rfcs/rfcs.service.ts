import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rfc } from '../entities/rfc.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class RfcsService {
  constructor(
    @InjectRepository(Rfc, 'rfcs')
    private readonly rfcRepository: Repository<Rfc>
  ) {}

  findAll(rfcs: string[]) {
    return this.rfcRepository
      .createQueryBuilder('r')
      .select('r.rfc, r.codigo_postal')
      .where('r.rfc in (:...sat)', { rfcs })
      .getRawMany();

    /*return this.rfcRepository.find({
      where: {
        rfc: In(sat),
      },
    });*/
  }

  async findOne(rfc: string) {
    const results = await this.rfcRepository.query('EXEC getRfcInfo @0', [rfc]);
    return results[0] ? results[0] : {};
    /*return this.rfcRepository
      .createQueryBuilder('r')
      .select('r.rfc, r.codigo_postal')
      .where('r.rfc in (:rfc)', { rfc })
      .getRawOne();*/
    /*return this.rfcRepository.findOne(rfc, { cache: true });*/
  }
}
