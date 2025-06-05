import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTaskDto {
    @IsString({message: 'Имя задачи должно быть строкой'})
    @IsNotEmpty({message: 'Имя задачи не должно быть пустым'})
    @Length(3, 50, {message: 'Имя задачи должно быть от 3 до 50 символов'})
    name: string;
    @IsBoolean({message: 'Статус выполнения задачи должен быть булевым значением'})
    isCompleted?: boolean;
    @IsString({message: 'Описание задачи должно быть строкой'})
    @IsNotEmpty({message: 'Описание задачи не должно быть пустым'})
    @Length(3, 200, {message: 'Описание задачи должно быть от 3 до 200 символов'})
    description?: string;
}