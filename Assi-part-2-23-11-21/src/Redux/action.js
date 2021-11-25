import {ADD_TODO,TOGGLE_TODO,DELETE_TODO, EDIT_TODO} from "./actionTypes";

function addTodo(data){
    return{
        type:ADD_TODO,
        payload:data
    }
};

function toggleTodo(data){
    return{
        type:TOGGLE_TODO,
        payload:data
    }
}


function delete_todo(data){
    return{
        type:DELETE_TODO,
        payload:data
    }
}


function editTodo(data){
    return{
        type:EDIT_TODO,
        payload:data
    }
}

export {addTodo,toggleTodo,delete_todo,editTodo};