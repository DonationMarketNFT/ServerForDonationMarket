import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  walletAddress: string;

  @IsString()
  walletKind: string;

  @IsString()
  nickName: string;
}
