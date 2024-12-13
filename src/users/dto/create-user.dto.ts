import { IsNotEmpty, IsStrongPassword } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  version: number;

  createdAt: Date;
  updatedAt: Date;
}
