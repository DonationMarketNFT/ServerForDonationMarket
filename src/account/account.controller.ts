import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { threadId } from 'worker_threads';
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAll(): Account[] {
    return this.accountService.getAll();
  }

  @Get(`/:email`)
  getEmail(@Param('email') accountEmail: string): Account {
    return this.accountService.getEmail(accountEmail);
  }

  @Get(`/:id`)
  getOne(@Param('id') accountId: number): Account {
    return this.accountService.getOne(accountId);
  }

  @Post()
  create(@Body() accountData: CreateAccountDto) {
    return this.accountService.create(accountData);
  }

  @Delete('/:id')
  remove(@Param('id') accountId: number) {
    return this.accountService.deleteOne(accountId);
  }
}
