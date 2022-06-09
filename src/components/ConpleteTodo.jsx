import React from "react";

export const ConpleteTodo = (props) => {

  const {todos, onClickBack} = props

  return (
    <>
      <div className="card mt-2" >
        <h4 className="card-header" style={{backgroundColor: "#ffe135"}}>完了タスク</h4>
        <div className="card-body" style={{backgroundColor: "#fff7d8"}}>
          <h6 className="pb-2">完了したタスクは{todos.length}件です。</h6>
          <ul className="list-unstyled">
            {todos.map((todo, index) => {
              return(
                <div key={todo} className="d-flex flex-row flex-wrap border-top pt-3 align-items-center my-2">
                  <li >{index+1} : {todo}</li>
                  <button onClick={() => {onClickBack(index)}} className="btn-sm btn-warning mx-2">戻す</button>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}