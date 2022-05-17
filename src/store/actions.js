import { ADD_TODO, SET_TODO_INPUT } from "./Constants";

export const setTodoInput = payload => ({
    type:SET_TODO_INPUT,
    payload
})
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})