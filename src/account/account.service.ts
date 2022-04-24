import { Injectable, NotFoundException, ShutdownSignal } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccountDto } from './dto/update-account.dto';
import { UpdateAccountAccessTokenDto } from './dto/update-accoutAccessToken.dto';
import { UpdateAccountWalletDto } from './dto/update-account-wallet.dto';
import { UpdateAccountNickNameDto } from './dto/update-account-nickname.dto';
@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  findAll(): Promise<Account[]> {
    return this.accountsRepository.find();
  }

  findByUserOne(id: string): Promise<Account> {
    return this.accountsRepository.findOne({
      where: [{ email: id }],
    });
  }

  async create(account: CreateAccountDto): Promise<void> {
    await this.accountsRepository.save(account);
  }
  //TODO: block same email id creation

  async deleteUser(id: string): Promise<boolean> {
    const deleteUser = await this.accountsRepository.delete(id);

    if (deleteUser.affected === 0) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }

  async setUser(
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Promise<boolean> {
    const { walletAddress, walletKind, nickName } = updateAccountDto;
    const changeUser = await this.accountsRepository.update(
      { id },
      { walletAddress, walletKind, nickName },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }

  async updateAccessToken(
    id: number,
    updateAccountAccessTokenDto: UpdateAccountAccessTokenDto,
  ): Promise<boolean> {
    const { accessToken } = updateAccountAccessTokenDto;
    const changeUser = await this.accountsRepository.update(
      { id },
      { accessToken },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }

  async setWallet(
    id: number,
    updateAccountWalletDto: UpdateAccountWalletDto,
  ): Promise<boolean> {
    const { walletAddress, walletKind } = updateAccountWalletDto;
    const changeUser = await this.accountsRepository.update(
      { id },
      { walletAddress, walletKind },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }

  async setNickName(
    id: number,
    updateAccountNickNameDto: UpdateAccountNickNameDto,
  ): Promise<boolean> {
    const { nickName } = updateAccountNickNameDto;
    const changeUser = await this.accountsRepository.update(
      { id },
      { nickName },
    );

    if (changeUser.affected !== 1) {
      throw new NotFoundException('There is no user');
    }
    return true;
  }
}
