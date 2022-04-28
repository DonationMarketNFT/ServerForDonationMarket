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

import { AccountWcService } from './account-wc.service';
import { AccountWc } from './entities/accountWc.entity';
import { CreateAccountWcDto } from './dto/create-accountWc.dto';
import { UpdateAccountWcNickNameDto } from './dto/update-accountWcNickName.dto';

@Controller('account-wc')
export class AccountWcController {
  constructor(private readonly accountWcService: AccountWcService) {}

  @Get('/user_all')
  findAll(): Promise<AccountWc[]> {
    return this.accountWcService.findAll();
  }

  @Get('user/addr/:addr')
  findByUserOneAddrParam(@Param('addr') addr: string): Promise<AccountWc> {
    return this.accountWcService.findByUserAddr(addr);
  }

  @Get('/user/:id')
  findByUserOneNickNameParam(@Param('id') id: string): Promise<AccountWc> {
    return this.accountWcService.findByUserOne(id);
  }

  @Post('/create_user')
  create(@Body() accountWc: CreateAccountWcDto) {
    return this.accountWcService.create(accountWc);
  }

  @Delete('user/delete/:id')
  deleteUserParam(@Param('id') id: string): Promise<boolean> {
    return this.accountWcService.deleteUser(id);
  }

  @Patch('user/updatenickname/:id')
  updateNickName(
    @Param('id') id: number,
    @Body() updateAccountWcNickNameDto: UpdateAccountWcNickNameDto,
  ): Promise<boolean> {
    return this.accountWcService.updateUserNickName(
      id,
      updateAccountWcNickNameDto,
    );
  }
}
