export const addTodo = (data) =>{
    return{
        type:"ADD_TODO",
        payload:{
            // id create for the unique item
            id: new Date().getTime().toString(),
            // data is data 
            data:data
        }
    }
}


export const deleteTodo = (id)=>{
    return{
        type:'DELETE_TODO',
        id
    }
}

export const removeTodo = () =>{
    return{
        type:'REMOVE_TODO'
    }
}
 