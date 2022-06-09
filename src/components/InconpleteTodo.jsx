import React from "react";

export const InconpleteTodo = (props) => {
  const {todos, onClickConplete, onClickDelete} = props

  return (
    <>
      <div className="card" >
        <h4 className="card-header" style={{backgroundColor: "#2eff62"}}>TODOリスト</h4>
        <div className="card-body" style={{backgroundColor: "#d8ffe2"}}>
          <h6 className="pb-2">未完了のタスクは{todos.length}件です。</h6>
          <ul className="list-unstyled">
            {todos.map((todo,index)=>{
              return(
                <div key={todo} className="d-flex flex-row flex-wrap border-top pt-3 align-items-center my-2">
                  <li >{index+1} : {todo}</li>
                  <button onClick={() => onClickConplete(index)} className="btn-sm btn-success mx-3">完了</button>
                  <button onClick={() => onClickDelete(index)} className="btn-sm btn-danger">削除</button>
                </div>
              )
            })}
          </ul >
        </div>
      </div>
    </>
  )
}