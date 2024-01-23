//import { Component, Input } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
/*export class TaskItemComponent {
  @Input() task = Task;
}
*/
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

}

