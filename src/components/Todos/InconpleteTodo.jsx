import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ConpleteTodoContext } from "../../providers/ConpleteTodoProvider";
import { FlashContext } from "../../providers/FlashProvider";
import { InconpleteTodoContext } from "../../providers/InconpleteTodoProvider";
import { TodoCard } from "../todoCard/TodoCard";

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
      <TodoCard cardHeaderColor={"#2eff62"} 
                cardBodyColor={"#d8ffe2"}
                cardTitle={'TODOリスト'}
                cardMessage={`未完了のタスクは${inconpleteTodos.length}件です`} >
        {inconpleteTodos.map((todo,index)=>{
          return(
            <SListDiv key={todo} className={BListDiv}>
              <li >{index+1} : {todo}</li>
              <SConpleteButton onClick={() => onClickConplete(index)} className={BConpleteButton}>
                完了
              </SConpleteButton>
              <SCancelButton onClick={() => onClickCancel(index)} className={BCancelButton}>
                取消
              </SCancelButton>
            </SListDiv>
          )
        })}
      </TodoCard>
    </>
  )
}


// ######## styled ################################################

const BListDiv = 'd-flex flex-row flex-wrap border-top pt-3 align-items-center my-2'
const SListDiv = styled.div`
  
`

const BConpleteButton = 'btn-sm btn-outline-info text-primary mx-3'
const SConpleteButton = styled.button`
  border-radius: 10px;
  background-color: #c6eeff;
  font-weight: bold;
  font-size: 11px;

`

const BCancelButton = 'btn-sm btn-outline-warning '
const SCancelButton = styled.button`
  border-radius: 10px;
  font-weight: bold;
  font-size: 11px;
  color: #7c7a00;

`

