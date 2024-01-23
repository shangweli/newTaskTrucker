import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
     tasks: Task[] = [];
        constructor(private taskService:TaskService){}

        ngOnInit(): void {
          this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
        }
    

}
