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
import { UpdateAccountAccessTokenDto } from './dto/update-accoutAccessToken.dto';
import { UpdateAccountWalletDto } from './dto/update-account-wallet.dto';
import { UpdateAccountNickNameDto } from './dto/update-account-nickname.dto';

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

  @Patch('user/updateaccesstoken/:id')
  updateAccessToken(
    @Param('id') id: number,
    @Body() updateAccountAccessTokenDto: UpdateAccountAccessTokenDto,
  ): Promise<boolean> {
    return this.accountService.updateAccessToken(
      id,
      updateAccountAccessTokenDto,
    );
  }

  @Patch('user/updatewallet/:id')
  setWallet(
    @Param('id') id: number,
    @Body() updateAccountWalletDto: UpdateAccountWalletDto,
  ): Promise<boolean> {
    return this.accountService.setWallet(id, updateAccountWalletDto);
  }

  @Patch('user/updatenickname/:id')
  setNickName(
    @Param('id') id: number,
    @Body() updateAccountNickNameDto: UpdateAccountNickNameDto,
  ): Promise<boolean> {
    return this.accountService.setNickName(id, updateAccountNickNameDto);
  }
}
