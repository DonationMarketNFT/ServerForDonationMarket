import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  thirdParty: string;

  @Column()
  walletAddress: string;

  @Column()
  walletKind: string;

  @Column()
  nickName: string;
}
