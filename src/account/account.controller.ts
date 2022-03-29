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
  ParseIntPipe,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
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

  @Delete('/user/delete/')
  deleteUserQuery(@Query('id') id: string): Promise<boolean> {
    return this.accountService.deleteUser(id);
  }

  @Delete('/user/delete/:id')
  deleteUserParam(@Param('id') id: string): Promise<boolean> {
    return this.accountService.deleteUser(id);
  }

  @Patch('user/:id')
  setUser(
    @Param('id') id: number,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<boolean> {
    return this.accountService.setUser(id, updateAccountDto);
  }
}
