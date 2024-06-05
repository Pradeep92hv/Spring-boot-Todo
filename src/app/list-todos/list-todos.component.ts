import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description : string,
    public done :boolean,
    public targetDate : Date
  )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {
  // todos=[
  //   new Todo(1,"Learn to dance",false,new Date()),
  //   new Todo(2,"Learn to song",false,new Date()),
  //   new Todo(2,"Learn to eat",false,new Date())

  //  ]

  todos:Todo[]
  constructor(
    private todosService: TodoDataService
  ) { }

  ngOnInit() {
    this.todosService.retrieveAllTodos("pradeephv").subscribe(
      response => {
        console.log(response)
        this.todos=response
      },
      error => {
        console.error('Error fetching todos', error);
      }
    )
  }

}
