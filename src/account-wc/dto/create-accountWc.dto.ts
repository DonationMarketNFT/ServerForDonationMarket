import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateAccountWcDto {
  @IsString()
  @IsNotEmpty()
  walletKind: string;

  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsString()
  @IsNotEmpty()
  nickName: string;
}
