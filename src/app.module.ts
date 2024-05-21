import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
