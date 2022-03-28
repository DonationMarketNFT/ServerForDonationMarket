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
  findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number): Account {
  //   return this.accountService.findOne(id);
  // }

  @Post('/create_user')
  create(@Body() account: CreateAccountDto) {
    return this.accountService.create(account);
  }
}
