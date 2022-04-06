import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('estados')
export class Estado {
  @PrimaryColumn()
  estado: number;

  @Column()
  descripcion: string;
}
