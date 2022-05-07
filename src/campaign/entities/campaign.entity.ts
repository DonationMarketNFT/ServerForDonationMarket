import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  currentAmount: number;

  @Column()
  targetAmount: number;

  @Column()
  fundingStatus: boolean;

  @Column()
  refundStatus: boolean;

  @Column()
  category: string;

  @Column()
  creatorAddress: string;
}
