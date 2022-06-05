import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campaignName: string;

  @Column()
  campaignId: number;

  @Column()
  nftUri: string;

  @Column()
  nftNum: number;

  @Column()
  used: boolean;
}
