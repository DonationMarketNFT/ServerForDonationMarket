import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { threadId } from 'worker_threads';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/user_all')
  findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get('/user')
  findByUserOneEmailQuery(@Query('id') id: string): Promise<Account> {
    return this.accountService.findByUserOne(id);
  }

  @Get('/user/:id')
  findByUserOneEmailParam(@Param('id') id: string): Promise<Account> {
    return this.accountService.findByUserOne(id);
  }

  @Post('/create_user')
  create(@Body() account: CreateAccountDto) {
    return this.accountService.create(account);
  }
}
