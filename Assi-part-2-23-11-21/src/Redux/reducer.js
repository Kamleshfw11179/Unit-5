import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,EDIT_TODO} from "./actionTypes";
import { store } from "./store";


const init = {
    todos:{
        loading:false,
        data:[],
        error:false,
    }
}

function reducer(state = init,{type,payload}){
    switch(type){
        case ADD_TODO:{
            let arr = [...state.todos.data];
            function adTo(){
                arr.push(payload);
                return arr;
            };
            return{
                ...state,
                todos:{
                    loading:false,
                    data:adTo(),
                    error:false
                }
            }
        }
        case DELETE_TODO:{
            let arr = [];
            function delTo(){
                for(var i=0;i<state.todos.data.length;i++){
                    if(state.todos.data[i].id!=payload){
                        arr.push(state.todos.data[i])
                    }
                }
                return arr
            }
            return{
                ...state,
                todos:{
                    loading:false,
                    data:delTo(),
                    error:false
                }
            }
        }
        case TOGGLE_TODO:{
            let arr = [];
            function togTo(){
                for(var i=0;i<state.todos.data.length;i++){
                    if(state.todos.data[i].id===payload){
                        state.todos.data[i].status = !state.todos.data[i].status;
                        arr.push(state.todos.data[i]);
                    }else{
                        arr.push(state.todos.data[i])
                    }
                    
                }
                return arr
            }
            return{
                ...state,
                todos:{
                    loading:false,
                    data:togTo(),
                    error:false
                }
            }
        }
        case EDIT_TODO:{
            let arr = [];
            function editTo(){
                const {id,data} = payload
                for(var i=0;i<state.todos.data.length;i++){
                    if(state.todos.data[i].id===id){
                        state.todos.data[i].title = data;
                        arr.push(state.todos.data[i]);
                    }else{
                        arr.push(state.todos.data[i])
                    }
                    
                }
                return arr
            }
            return{
                ...state,
                todos:{
                    loading:false,
                    data:editTo(),
                    error:false
                }
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
    }
    

    export {reducer}