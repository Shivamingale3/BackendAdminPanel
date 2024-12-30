import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public role: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsUrl()
  public profilePicture: string;
}

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
