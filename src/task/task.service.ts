import { DeleteTaskDto } from './dto/delete-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            name: 'Task 1',
            isCompleted: false,
        },
        {
            id: 2,
            name: 'Task 2',
            isCompleted: true,
        }
    ];

    findAll() {
        return this.tasks;
    }
    findById(id: number) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        return task;
    }
    createTask(dto: CreateTaskDto) {
        const { name, isCompleted } = dto;
        const newTask = {
            id: this.tasks.length + 1,
            name,
            isCompleted: isCompleted ?? false,
            timestamp: new Date().toISOString(),
        };

        this.tasks.push(newTask);
        return this.tasks;
    }

    updateTask(id: number, dto: UpdateTaskDto) {
        const { name, isCompleted } = dto;
        const taskIndex = this.tasks.findIndex((task) => task.id === id);

        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        const updatedTask = {
            ...this.tasks[taskIndex],
            name: name ?? this.tasks[taskIndex].name,
            isCompleted: isCompleted ?? this.tasks[taskIndex].isCompleted,
            timestamp: new Date().toISOString(),
        };

        this.tasks[taskIndex] = updatedTask;
        return updatedTask;
    }
    DeleteTask(dto: DeleteTaskDto) {
        const { id } = dto;
        const taskIndex = this.tasks.findIndex((task) => task.id === id);

        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        this.tasks.splice(taskIndex, 1);
        return { message: `Task with id ${id} deleted successfully` };
    }
    patchTask(id: number, dto: Partial<UpdateTaskDto>) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);

        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        const updatedTask = {
            ...this.tasks[taskIndex],
            ...dto,
            timestamp: new Date().toISOString(),
        };

        this.tasks[taskIndex] = updatedTask;
        return updatedTask;
    }

}

