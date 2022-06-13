import React, { memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { FlashContext } from '../../providers/FlashProvider';
import { InconpleteTodoContext } from '../../providers/InconpleteTodoProvider';


export const InputTodo = memo(() => {
  
  const [ todoText, setTodoText ] = useState('');
  const { setFlashFlag } = useContext(FlashContext)
  const { inconpleteTodos, setInconpleteTodos } = useContext(InconpleteTodoContext)

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    if (todoText === "") return; 
    const newTodos = [...inconpleteTodos, todoText]
    setInconpleteTodos(newTodos)
    setTodoText('')  

    if(newTodos.length >= 5){
      setFlashFlag('todoAddAndError')
    }else{
      setFlashFlag('todoAdd')
    }
  }

  return(
    <>
      <SAddFormDiv className={BAddFormDiv}>
        <SAddInput disabled={inconpleteTodos.length >= 5} 
                   type='text'
                   placeholder='TODOを入力' 
                   value={todoText} 
                   onChange={onChangeTodoText} 
                   className={BAddInput} />
               
        <SAddButton disabled={inconpleteTodos.length >= 5} 
                    onClick={onClickAdd} 
                    className={BAddButton} >
            追加
        </SAddButton>
      </SAddFormDiv>
    </>
  )
})

// ######## styled ################################################

const BAddFormDiv = "d-flex flex-row alert alert-info my-2"
const SAddFormDiv = styled.div`
  background-color: #cbfeff;
`
const BAddButton = "btn btn-primary mx-2 "
const SAddButton = styled.button`
  font-size: 18px;
  background-color: #01829c;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #4671fe;
  }
`
const BAddInput = "form-control w-50 pr-3"
const SAddInput = styled.input`
  border-radius: 15px;
`