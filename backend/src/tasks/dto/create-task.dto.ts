import { IsOptional, IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  @IsString()
  title!: string;
  @IsOptional()
  @IsString()
  description!: string;
  @IsOptional()
  @IsBoolean()
  completed!: boolean;
}
