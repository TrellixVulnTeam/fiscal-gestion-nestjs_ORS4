import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('delegaciones_municipios')
export class DelegacionMunicipio {
  @PrimaryColumn()
  delegacion_municipio: number;

  @Column()
  descripcion: string;
}
