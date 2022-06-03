import React from "react";

export const InconpleteTodo = (props) => {
  const {todos, onClickConplete, onClickDelete} = props

  return (
    <>
      <div className="alert alert-success mb-2" >
        <p className="text-center text-dark h3 mb-3">未完了のTODO</p>
        <ul className="list-unstyled">
          {todos.map((todo,index)=>{
            return(
              <div key={todo} className="d-flex flex-row align-items-center my-2">
                <li>No.{index+1} : {todo}</li>
                <button onClick={() => onClickConplete(index)} className="btn-sm btn-success mx-3">完了</button>
                <button onClick={() => onClickDelete(index)} className="btn-sm btn-danger">削除</button>
              </div>
            )
          })}
        </ul >
      </div>
    </>
  )
}