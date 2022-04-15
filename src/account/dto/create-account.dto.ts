import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  thirdParty: string;

  @IsString()
  walletAddress: string;

  @IsString()
  walletKind: string;

  @IsString()
  nickName: string;
}
