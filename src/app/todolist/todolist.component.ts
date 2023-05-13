import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor(private ts:TodoserviceService){

  }
 todos:any;
  ngOnInit(): void {
   this.todos = this.ts.todoList
  }
  removeTodo(index:any){
    this.ts.deleteTodo(index)
  //  console.log(index)
  }

}
