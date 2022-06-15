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
    };
  };

  return(
    <>
      <SAddFormDiv className={BAddFormDiv}>
        <SAddInput disabled={inconpleteTodos.length >= 5} 
                   type='text'
                   placeholder='TODOを入力' 
                   value={inconpleteTodos.length >= 5 ? 
                          ('※ TODOは5件以上入力できません'):
                          (todoText)}
                   onChange={onChangeTodoText} 
                   inconpleteTodos={inconpleteTodos}
                   className={BAddInput} />
               
        <SAddButton disabled={inconpleteTodos.length >= 5 ||
                              (!todoText || /^\s*$/.test(todoText))} 
                    onClick={onClickAdd} 
                    className={BAddButton} >
            追加
        </SAddButton>
      </SAddFormDiv>
    </>
  );
});

// ######## styled ################################################

const BAddFormDiv = "d-flex flex-row alert alert-info my-1 py-3"
const SAddFormDiv = styled.div`
  background-color: #ffffff23;
  border: none;
`
const BAddButton = "btn btn-primary mx-3 "
const SAddButton = styled.button`
  font-size: 18px;
  background-color: #0318d7b7;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
    /* background-color: #0008ff; */
  }
`
const BAddInput = "form-control w-75 "
const SAddInput = styled.input`
  border-radius: 15px;
  ${props => props.inconpleteTodos.length >= 5 && `color:#ff0000`};
  
`