import React, { useContext, useEffect, useState } from 'react'
import { InconpleteTodo } from './components/InconpleteTodo'
import { InputTodo }  from './components/InputTodo'
import { ConpleteTodo } from './components/ConpleteTodo'

import { FlashContext } from './providers/FlashProvider';

export const App = () => {
  const { setFlashFlag } = useContext(FlashContext)

  const [todoText, setTodoText] = useState('')
  const [inconpleteTodos, setInconpleteTodos ] = useState([])
  const [conpleteTodos, setConpleteTodos] = useState([])
  

  

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

  const onClickCancel = (index) =>{
    const newTodos = [...inconpleteTodos]
    newTodos.splice(index, 1)
    setInconpleteTodos(newTodos) 
    setFlashFlag('todoCancel')
  }

  const onClickDelete = (index) =>{
    const newTodos = [...conpleteTodos]
    newTodos.splice(index, 1)
    setConpleteTodos(newTodos) 
    setFlashFlag('todoDelete')
  }

  const onClickConplete = (index) =>{
    const newinconpleteTodos = [...inconpleteTodos]
    newinconpleteTodos.splice(index,1)
    const newconpleteTodos = [...conpleteTodos, inconpleteTodos[index]]
    setInconpleteTodos(newinconpleteTodos)
    setConpleteTodos(newconpleteTodos)
    setFlashFlag('todoConplete')
  }

  const onClickBack = (index) => {
    const newConpleteTodos = [...conpleteTodos]
    newConpleteTodos.splice(index,1)
    const newInconpleteTodos = [...inconpleteTodos, conpleteTodos[index]]
    setConpleteTodos(newConpleteTodos)
    setInconpleteTodos(newInconpleteTodos)
    setFlashFlag('todoBack')
    if(newInconpleteTodos.length >= 5){
      setFlashFlag('todoBackAndError')
    }else{
      setFlashFlag('todoBack')
    }
  }

  useEffect(() => {
    inconpleteTodos.length >= 5 && setFlashFlag('todoError')},
    [inconpleteTodos, conpleteTodos])

  useEffect(() => {
    setFlashFlag('')
  },[inconpleteTodos, conpleteTodos])


  return (
    <>
      <div className="container-fluid">
        <div className="bg-dark text-warning pt-2 pb-1 px-4 my-2 ">
          <h1>TODO_APP</h1>
        </div>

        <InputTodo todoText={todoText} 
                   onChange={onChangeTodoText} 
                   onClick={onClickAdd}
                   disabled={inconpleteTodos.length >= 5}/>
        
        <InconpleteTodo todos={inconpleteTodos}
                        onClickConplete={onClickConplete}
                        onClickCancel={onClickCancel} />

        <ConpleteTodo todos={conpleteTodos}
                      onClickBack={onClickBack}
                      onClickDelete={onClickDelete} />
      </div>
    </>
  );
}

