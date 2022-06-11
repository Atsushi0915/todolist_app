import React, { memo, useContext, useState } from 'react';
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
      <div className="d-flex flex-row alert alert-info mb-2">
        <input disabled={inconpleteTodos.length >= 5} 
               placeholder='TODOを入力' 
               value={todoText} 
               onChange={onChangeTodoText} 
               className="form-control w-50 pr-3" />
               
        <button disabled={inconpleteTodos.length >= 5} 
                onClick={onClickAdd} 
                className="btn btn-primary mx-2">追加</button>
      </div>
    </>
    
  )
})