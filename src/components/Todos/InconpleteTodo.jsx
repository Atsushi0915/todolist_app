import React, { useContext, useEffect } from "react";
import { ConpleteTodoContext } from "../../providers/ConpleteTodoProvider";
import { FlashContext } from "../../providers/FlashProvider";
import { InconpleteTodoContext } from "../../providers/InconpleteTodoProvider";
import { TodoCard } from "../TodoCard/TodoCard";

export const InconpleteTodo = () => {
  
  const { inconpleteTodos, setInconpleteTodos } = useContext(InconpleteTodoContext)
  const { conpleteTodos, setConpleteTodos } = useContext(ConpleteTodoContext)
  const { setFlashFlag } = useContext(FlashContext)

  const onClickCancel = (index) =>{
    const newTodos = [...inconpleteTodos]
    newTodos.splice(index, 1)
    setInconpleteTodos(newTodos) 
    setFlashFlag('todoCancel')
  }

  const onClickConplete = (index) =>{
    const newinconpleteTodos = [...inconpleteTodos]
    newinconpleteTodos.splice(index,1)
    const newconpleteTodos = [...conpleteTodos, inconpleteTodos[index]]
    setInconpleteTodos(newinconpleteTodos)
    setConpleteTodos(newconpleteTodos)
    setFlashFlag('todoConplete')
  }

  useEffect(() => {
    inconpleteTodos.length >= 5 && setFlashFlag('todoError')},
    [inconpleteTodos, conpleteTodos])

  return (
    <>
      <TodoCard cardHeadColor={"#2eff62"} 
                cardBodyColor={"#d8ffe2"}
                cardTitle={'TODOリスト'}
                cardMessage={`未完了のタスクは${inconpleteTodos.length}件です`} >
        {inconpleteTodos.map((todo,index)=>{
          return(
            <div key={todo} className="d-flex flex-row flex-wrap border-top pt-3 align-items-center my-2">
              <li >{index+1} : {todo}</li>
              <button onClick={() => onClickConplete(index)} className="btn-sm btn-outline-info mx-3">
                完了
              </button>
              <button onClick={() => onClickCancel(index)} className="btn-sm btn-outline-warning">
                取消
              </button>
            </div>
          )
        })}
      </TodoCard>
    </>
  )
}