import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateTaskDto {
        @IsString()
        @IsNotEmpty()
        @Length(3, 50)
    name?: string;
        @IsBoolean()
    isCompleted?: boolean;
    @IsString()
    @IsNotEmpty()
    @Length(3, 200)
    description?: string;
}  