// @ts-nocheck
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TransportModel } from './TransportModel';

@Entity('quotes')
export class QuoteModel {
  @PrimaryColumn()
  id: string;

  @Column()
  from: string;

  @Column()
  destination: string;

  @Column()
  depart_date: Date;

  @Column()
  reture_date: Date;

  @Column()
  amount_people: number;

  @Column()
  transport_id: string;

  @ManyToOne(() => TransportModel)
  @JoinColumn({ name: 'transport_id' })
  transport: TransportModel;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
