import { Injectable, NotFoundException, ShutdownSignal } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
@Injectable()
export class AccountService {
  private accounts: Account[] = [];

  getAll(): Account[] {
    return this.accounts;
  }

  getOne(id: number): Account {
    const account = this.accounts.find((account) => account.id === id);
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }
    return account;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.accounts = this.accounts.filter((account) => account.id !== id);
  }

  create(accountData: CreateAccountDto) {
    this.accounts.push({
      id: this.accounts.length + 1,
      ...accountData,
    });
  }
}
