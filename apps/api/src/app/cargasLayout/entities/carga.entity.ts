import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CargaLayout {
  @Column()
  IdEmpresa: string;
  @Column()
  CP: string;
  @Column()
  CURP: string;
  @Column()
  CalleNum: string;
  @Column()
  Colonia: string;
  @Column()
  Estado: string;
  @Column()
  Municipio: string;
  @Column()
  Nacionalidad: string;
  @Column()
  Nombre: string;
  @Column()
  Num: string;
  @Column()
  NumEmp: string;
  @Column()
  PrimerApellido: string;
  @Column()
  RFC: string;
  @Column()
  SegundoApellido: string;
  @Column()
  Email?: string;
}
