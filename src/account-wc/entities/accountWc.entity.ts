import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountWc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  walletAddress: string;

  @Column()
  walletKind: string;

  @Column()
  nickName: string;
}
