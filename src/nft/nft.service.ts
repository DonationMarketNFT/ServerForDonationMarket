import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Nft } from './entities/nft.entity';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftUsedDto } from './dto/update-nftUsed.dto';

@Injectable()
export class NftService {
  constructor(
    @InjectRepository(Nft)
    private nftRepository: Repository<Nft>,
  ) {}

  getAll(): Promise<Nft[]> {
    return this.nftRepository.find();
  }

  findByCampaignId(_camapaignId: number): Promise<Nft[]> {
    return this.nftRepository.find({
      where: [{ campaignId: _camapaignId }],
    });
  }

  async create(nft: CreateNftDto): Promise<void> {
    await this.nftRepository.save(nft);
  }

  async deleteNft(id: string): Promise<boolean> {
    const deleteNft = await this.nftRepository.delete(id);

    if (deleteNft.affected === 0) {
      throw new NotFoundException('There is no nft');
    }
    return true;
  }

  async updateNftUsedStatus(
    id: number,
    updateNftUsedStatus: UpdateNftUsedDto,
  ): Promise<boolean> {
    const { used } = updateNftUsedStatus;
    const changeNft = await this.nftRepository.update({ id }, { used });
    if (changeNft.affected !== 1) {
      throw new NotFoundException('There is no Nft');
    }
    return true;
  }
}
