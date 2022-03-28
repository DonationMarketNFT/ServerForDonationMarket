import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  thirdParty: string;
}
