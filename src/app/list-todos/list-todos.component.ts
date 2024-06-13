import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message: string;
  todos: Todo[];

  constructor(
    private todosService: TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos(); // Initially load todos
    // Polling every 5 seconds (you can adjust the time interval as needed)
    interval(5000).subscribe(() => {
      this.refreshTodos();
    });
  }

  refreshTodos() {
    this.todosService.retrieveAllTodos("pradeephv").subscribe(
      response => {
        console.log("Data refreshed");
        this.todos = response;
      },
      error => {
        console.error('Error fetching todos', error);
      }
    );
  }

  deleteTodo(id) {
    this.todosService.deleteTodo("pradeephv", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        // Refresh todos after deletion
        this.refreshTodos();
      }
    );
  }

  updateTodo(id)
  {
    console.log(id)
    this.router.navigate(['todos',id])
    
  }
}
