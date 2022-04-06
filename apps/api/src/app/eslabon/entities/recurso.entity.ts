import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { DelegacionMunicipio } from './delegacion-municipio.entity';
import { Estado } from './estado.entity';
import { Empleado } from './empleado.entity';

@Entity('recursos')
export class Recurso {

  @AfterLoad()
  cleanRfc() {
    this.rfc = this.curp.replace(/-/g, '').trim();
  }
  rfc: string;

  @PrimaryColumn()
  id: number;

  @OneToOne(() => Empleado)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  empleado: Empleado;

  @Column()
  nombre: string;

  @Column()
  paterno: string;

  @Column()
  materno: string;

  @Column()
  curp: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  calle: string;

  @Column()
  numero_calle: string;

  @Column()
  colonia: string;

  @OneToOne(() => DelegacionMunicipio)
  @JoinColumn({
    name: 'delegacion_municipio',
    referencedColumnName: 'delegacion_municipio',
  })
  municipio: DelegacionMunicipio;

  @OneToOne(() => Estado)
  @JoinColumn({ name: 'estado', referencedColumnName: 'estado' })
  estado: Estado;

  @Column()
  codigo_postal: string;

  /*@Column()
  telefono_propio: string;

  @Column()
  telefono_recado: string;*/

  @Column()
  originario: string;

  @Column()
  estado_civil: number;

  @Column()
  fecha_registro: Date;

  @Column()
  fecha_modificacion: Date;

  /*trasladarse: { type: DataTypes.SMALLINT, allowNull: true },
  sueldo_pretende: {
    type: DataTypes.DECIMAL({ length: 18, decimals: 2 }),
    allowNull: true,
  },
  sindicato_anterior: { type: DataTypes.STRING(60), allowNull: true },
  depende_padres: { type: DataTypes.SMALLINT, allowNull: true },
  tiene_cuenta_inversion: { type: DataTypes.SMALLINT, allowNull: true },
  banco_inversion: { type: DataTypes.STRING(30), allowNull: true },
  tiene_cuenta_ahorro: { type: DataTypes.SMALLINT, allowNull: true },
  banco_ahorro: { type: DataTypes.STRING(30), allowNull: true },
  tiene_seguro: { type: DataTypes.SMALLINT, allowNull: true },
  compania_seguro: { type: DataTypes.CHAR(30), allowNull: true },
  casa_propia: { type: DataTypes.SMALLINT, allowNull: true },
  afiliacion_imss: { type: DataTypes.CHAR(14), allowNull: true },
  afiliacion_issste: { type: DataTypes.CHAR(14), allowNull: true },
  accidentes_enfermedades: { type: DataTypes.STRING(255), allowNull: true },
  tipo_sangre: { type: DataTypes.CHAR(5), allowNull: true },
  cuenta_individual: { type: DataTypes.STRING(30), allowNull: true },
  tipo_licencia: { type: DataTypes.STRING(10), allowNull: true },
  interior: { type: DataTypes.STRING(10), allowNull: true },
  licencia: { type: DataTypes.STRING(10), allowNull: true },*/
}
