import React from "react";

export const ConpleteTodo = (props) => {

  const {todos, onClickBack} = props

  return (
    <>
      <div className="form-group alert alert-warning">
        <p className="text-center text-darkss h3 mb-3">完了のTODO</p>
        <ul className="list-unstyled">
          {todos.map((todo, index) => {
            return(
              <div key={todo} className="d-flex flex-row align-items-center my-2">
                <li >No.{index+1} : {todo}</li>
                <button onClick={() => {onClickBack(index)}} className="btn-sm btn-warning mx-2">戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}