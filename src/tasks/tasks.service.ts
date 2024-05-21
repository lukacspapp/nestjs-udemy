/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  #tasks = [];

  getAllTasks() {
    return this.#tasks;
  }

  getTaskById(id: string) {
    return this.#tasks.find((task) => task.id === id);
  }
}
