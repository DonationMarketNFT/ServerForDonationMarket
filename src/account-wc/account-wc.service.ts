import { Injectable, NotFoundException, ShutdownSignal } from '@nestjs/common';
import { CreateAccountWcDto } from './dto/create-accountWc.dto';
import { AccountWc } from './entities/accountWc.entity';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccountWcNickNameDto } from './dto/update-accountWcNickName.dto';

@Injectable()
export class AccountWcService {
  constructor(
    @InjectRepository(AccountWc)
    private accountWcsRepository: Repository<AccountWc>,
  ) {}

  findAll(): Promise<AccountWc[]> {
    return this.accountWcsRepository.find();
  }

  findByUserAddr(id: string): Promise<AccountWc> {
    return this.accountWcsRepository.findOne({
      where: [{ walletAddress: id }],
    });
  }

  findByUserOne(id: string): Promise<AccountWc> {
    return this.accountWcsRepository.findOne({
      where: [{ nickName: id }],
    });
  }

  async create(account: CreateAccountWcDto): Promise<void> {
    await this.accountWcsRepository.save(account);
  }

  async deleteUser(id: string): Promise<boolean> {
    const deleteUser = await this.accountWcsRepository.delete(id);

    if (deleteUser.affected === 0) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }

  async updateUserNickName(
    id: number,
    updateAccountWcDto: UpdateAccountWcNickNameDto,
  ): Promise<boolean> {
    const { nickName } = updateAccountWcDto;
    const changeUser = await this.accountWcsRepository.update(
      { id },
      { nickName },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }
}
