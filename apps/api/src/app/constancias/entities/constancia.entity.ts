import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Constancias {
  @PrimaryColumn()
  idConstancia: number;
  @Column()
  rfc: string;
  @Column()
  nombre: string;
  @Column()
  apellidoPaterno: string;
  @Column()
  apellidoMaterno: string;
  @Column()
  curp: string;
  @Column()
  codigoPostal: string;
}
