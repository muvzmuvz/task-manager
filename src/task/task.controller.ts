import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(+id);
  }

  @Post('create')
  createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }
  @Put('update/:id')
  updateTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.updateTask(+id, dto);
  }
  @Delete('delete/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.DeleteTask({ id: +id });
  }
  @Patch('patch/:id')
  patchTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.patchTask(+id, dto);
  }
}
