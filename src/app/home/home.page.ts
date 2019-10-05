import { Component } from '@angular/core';
import {Store, State, Select} from '@ngxs/store';
import {TodoState,TodoStateModel} from '../states/todo.state';
import {Todo} from '../models/todo';
import * as actions from '../actions/todo.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Select(state=>state.todos)
  todos$: Observable<TodoStateModel>;
  
  constructor(private store:Store) {}

  addTodo(){
    let m: Todo={userId:1,id:1,title:'Titulo',completed:false};
    this.store.dispatch(new actions.AddTodo(m));
  }

  

}
