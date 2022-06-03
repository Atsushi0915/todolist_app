import React, {useState} from 'react'
import { InconpleteTodo } from './components/InconpleteTodo'
import { InputTodo }  from './components/InputTodo'
import { ConpleteTodo } from './components/ConpleteTodo'

export const App = () => {
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
  }

  const onClickDelete = (index) =>{
    const newTodos = [...inconpleteTodos]
    newTodos.splice(index, 1)
    setInconpleteTodos(newTodos) 
  }

  const onClickConplete = (index) =>{
    const newinconpleteTodos = [...inconpleteTodos]
    newinconpleteTodos.splice(index,1)
    const newconpleteTodos = [...conpleteTodos, inconpleteTodos[index]]
    setInconpleteTodos(newinconpleteTodos)
    setConpleteTodos(newconpleteTodos)
  }

  const onClickBack = (index) => {
    const newConpleteTodos = [...conpleteTodos]
    newConpleteTodos.splice(index,1)
    const newInconpleteTodos = [...inconpleteTodos, conpleteTodos[index]]
    setConpleteTodos(newConpleteTodos)
    setInconpleteTodos(newInconpleteTodos)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="bg-dark text-warning p-2 my-2 ">
          <h2>TODOリスト</h2>
        </div>
        <InputTodo todoText={todoText} 
                   onChange={onChangeTodoText} 
                   onClick={onClickAdd}
                   disabled={inconpleteTodos.length >= 5}/>
                   
        {inconpleteTodos.length >= 5 &&
          <p className="text-danger h3" >・登録できるtodoは5個までだよ〜。消化しろ〜!!</p>
        }
        
        <InconpleteTodo todos={inconpleteTodos}
                        onClickConplete={onClickConplete}
                        onClickDelete={onClickDelete} />

        <ConpleteTodo todos={conpleteTodos}
                      onClickBack={onClickBack} />
      </div>
    </>
  );
}

