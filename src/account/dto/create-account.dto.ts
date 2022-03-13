import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  email: string;

  @IsString()
  thirdParty: string;
}
