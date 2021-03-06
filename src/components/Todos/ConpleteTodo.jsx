import React, { useContext } from "react";
import styled from "styled-components";
import { ConpleteTodoContext } from "../../providers/ConpleteTodoProvider";
import { FlashContext } from "../../providers/FlashProvider";
import { InconpleteTodoContext } from "../../providers/InconpleteTodoProvider";
import { OldTodoContext } from "../../providers/OldTodoProvider";
import { TodoCard } from "../TodoCard/TodoCard";

export const ConpleteTodo = () => {

  const { conpleteTodos, setConpleteTodos } = useContext(ConpleteTodoContext)
  const { inconpleteTodos, setInconpleteTodos } = useContext(InconpleteTodoContext)
  const { oldTodos, setOldTodos } = useContext(OldTodoContext)
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
    const newOldTodos = [...oldTodos, conpleteTodos[index]]
    setConpleteTodos(newTodos) 
    setOldTodos(newOldTodos)

    setFlashFlag('todoDelete')
  }


  return (
    <>
      <TodoCard cardHeaderColor={"#64ff69a7"} 
                cardHeaderIcon={'FiCheckSquare'}
                cardBodyColor={"#e9fcfe"}
                cardTitle={'Conpleteリスト'}
                cardMessage={`完了したタスクは${conpleteTodos.length}件です`}>

        {conpleteTodos.map((todo, index) => {
          return(
            <SListDiv key={todo} className={BListDiv}>
              <li >{index+1} : {todo}</li>
              <SBackButton onClick={() => {onClickBack(index)}} className={BBackButton}>
                戻す
              </SBackButton>
              <SDeleteButton onClick={() => {onClickDelete(index)}} className={BDeleteButton}>
                削除
              </SDeleteButton>
            </SListDiv>
          )
        })}
      </TodoCard>
    </>
  )
}

// ######## styled #################################################

const BListDiv = 'd-flex flex-row flex-wrap border-top pt-3 align-items-center my-2'
const SListDiv = styled.div`
  
`

const BBackButton = 'btn-sm btn-outline-success mx-2'
const SBackButton = styled.button`
  border-radius: 10px;
  background-color: #e0ffe2;
  font-weight: bold;
  font-size: 11px;
`

const BDeleteButton = 'btn-sm btn-outline-danger mx-2'
const SDeleteButton = styled.button`
  border-radius: 10px;
  background-color: #ffe1e1;
  font-weight: bold;
  font-size: 11px;
`

