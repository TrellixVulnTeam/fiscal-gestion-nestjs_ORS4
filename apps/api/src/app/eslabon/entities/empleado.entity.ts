import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryColumn()
  id: number;

  @Column()
  empleado: string;

  @Column()
  estatus: number;
}
