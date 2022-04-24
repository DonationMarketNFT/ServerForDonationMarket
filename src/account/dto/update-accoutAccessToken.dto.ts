import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateAccountAccessTokenDto {
  @IsString()
  accessToken: string;
}
