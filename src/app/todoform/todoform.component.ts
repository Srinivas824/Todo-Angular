import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  taskInput=""
  constructor(private ts :TodoserviceService){
    
  }
  ngOnInit(): void {
    
  }
  addTask(){
    this.ts.addTodo(this.taskInput);
    this.taskInput=""


  }
  resetForm(){
    this.taskInput=""
  }

}
