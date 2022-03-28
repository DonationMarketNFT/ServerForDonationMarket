import { Injectable, NotFoundException, ShutdownSignal } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  findAll(): Promise<Account[]> {
    return this.accountsRepository.find();
  }

  // findOne(id: number): Promise<Account> {
  //   return this.accountsRepository.findOneBy(id);
  // }

  async create(account: CreateAccountDto): Promise<void> {
    await this.accountsRepository.save(account);
  }
}
