import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class UpdateAccountNickNameDto {
  @IsString()
  nickName: string;
}
