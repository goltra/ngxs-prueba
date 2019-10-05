import {State, Store, StateContext, Action, Select} from '@ngxs/store';
import * as actions from '../actions/todo.action';
import {Todo} from '../models/todo';

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
    constructor (private store:Store){

    }

    @Action(actions.AddTodo)
    addTodo(ctx:StateContext<TodoStateModel>, pp:actions.AddTodo){
        console.log('addTodo', pp.payload);
        let data = ctx.getState().todo;
        console.log('addTodo data',data);
        data.push(pp.payload);
        ctx.patchState({todo: data});
    }

}