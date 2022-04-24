import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateAccountWalletDto {
  @IsString()
  walletAddress: string;

  @IsString()
  walletKind: string;
}
