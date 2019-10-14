import {State, Store, StateContext, Action, Select} from '@ngxs/store';
import * as actions from '../actions/todo.action';
import {Todo} from '../models/todo';
import {TodoService} from '../service/todo.service';

export interface TodoStateModel{
    todo: Todo[]
}

@State({
    name: 'todos',
    defaults:{
        todo:[]
    }
})

export class TodoState{
    constructor (private store:Store,private todoService:TodoService){

    }

    @Action(actions.AddTodo)
    addTodo(ctx:StateContext<TodoStateModel>, pp:actions.AddTodo){
        // let data = ctx.getState().todo;
        this.todoService.addTodo(pp.payload);
        ctx.patchState({todo: this.todoService.usersDatabase});
    }

}