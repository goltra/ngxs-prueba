import { Injectable } from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public usersDatabase:Array<Todo>=[]
  constructor() { }

  addTodo(todo:Todo){
    this.usersDatabase.push(todo);
  }
}
