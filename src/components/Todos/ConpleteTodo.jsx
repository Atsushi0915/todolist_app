import React, { useContext } from "react";
import { ConpleteTodoContext } from "../../providers/ConpleteTodoProvider";
import { FlashContext } from "../../providers/FlashProvider";
import { InconpleteTodoContext } from "../../providers/InconpleteTodoProvider";
import { TodoCard } from "../TodoCard/TodoCard";

export const ConpleteTodo = () => {

  const { conpleteTodos, setConpleteTodos } = useContext(ConpleteTodoContext)
  const { inconpleteTodos, setInconpleteTodos } = useContext(InconpleteTodoContext)
  const { setFlashFlag } = useContext(FlashContext)

  
  const onClickBack = (index) => {
    const newConpleteTodos = [...conpleteTodos]
    newConpleteTodos.splice(index,1)
    const newInconpleteTodos = [...inconpleteTodos, conpleteTodos[index]]
    setConpleteTodos(newConpleteTodos)
    setInconpleteTodos(newInconpleteTodos)
    
    if(newInconpleteTodos.length >= 5){
      setFlashFlag('todoBackAndError')
    }else{
      setFlashFlag('todoBack')
    }
  }
  
  const onClickDelete = (index) =>{
    const newTodos = [...conpleteTodos]
    newTodos.splice(index, 1)
    setConpleteTodos(newTodos) 

    setFlashFlag('todoDelete')
  }


  return (
    <>
      <TodoCard cardHeadColor={"#ffe135"} 
                cardBodyColor={"#fff7d8"}
                cardTitle={'Conpleteリスト'}
                cardMessage={`完了したタスクは${conpleteTodos.length}件です`}>
        {conpleteTodos.map((todo, index) => {
          return(
            <div key={todo} className="d-flex flex-row flex-wrap border-top pt-3 align-items-center my-2">
              <li >{index+1} : {todo}</li>
              <button onClick={() => {onClickBack(index)}} className="btn-sm btn-outline-success mx-2">
                戻す
              </button>
              <button onClick={() => {onClickDelete(index)}} className="btn-sm btn-outline-danger mx-2">
                削除
              </button>
            </div>
          )
        })}
      </TodoCard>
    </>
  )
}