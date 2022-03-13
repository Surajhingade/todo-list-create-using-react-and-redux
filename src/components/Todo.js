import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  // console.log(inputData);

  // get data from redux store using useSelector
  const list = useSelector((state) => state.todoReducers.list);

  // save to redux store using useDispatch
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>

          <div className="addItem">
            <input
              type="text"
              placeholder="Add Item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItem" style={{'margin-top':'15px'}}>
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash-alt  add-btn  "
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="showItem" >
            <button className="btn effect04" data-sm-link-text='remove all'
            onClick={()=>dispatch(removeTodo())}
            ><span>Check List</span></button>
          </div>

        </div>
      </div>
    </>
  );
};
 
export default Todo;
