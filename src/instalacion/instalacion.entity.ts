import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";
import { Pista } from "../pista/pista.entity";

export enum estado_instalacion {
  ACTIVA = "activa",
  EN_MANTENIMIENTO = "en_mantenimiento",
  INACTIVA = "inactiva",
}

@Entity()
export class Instalacion {
  @PrimaryGeneratedColumn({ name: "instalacion_id", type: "int" })
  instalacion_id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column({ type: "int" })
  capacidad_max: number;

  @Column()
  descripcion: string;

  @Column({ type: "date" })
  fecha_creacion: string;

  @Column({
    type: "enum",
    enum: estado_instalacion,
    default: estado_instalacion.INACTIVA,
  })
  estado: estado_instalacion;

  @Column({ type: "time" })
  horario_apertura: string;

  @Column({ type: "time" })
  horario_cierre: string;

  @OneToMany(() => Pista, (pi) => pi.instalacion)
  pista: Pista[];
}
