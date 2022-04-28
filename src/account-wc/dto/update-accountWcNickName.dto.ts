import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateAccountWcNickNameDto {
  @IsString()
  @IsNotEmpty()
  nickName: string;
}
