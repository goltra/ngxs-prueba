import {Todo} from '../models/todo';

export class AddTodo{
    static readonly type='[Todo] Add';
    
    constructor(public payload:Todo){

    }
}
export class GetTodos{
    static readonly type='[Todo] Get';
}
