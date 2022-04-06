import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Rfc {
  @PrimaryColumn()
  rfc: string;
  @Column()
  nombre_razon_social: string;
  @Column()
  codigo_postal: number;
}
