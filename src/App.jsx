import React, { useContext, useEffect} from 'react'

import { InputTodo }  from './components/InputTodo/InputTodo'
import { InconpleteTodo } from './components/Todos/InconpleteTodo'
import { ConpleteTodo } from './components/Todos/ConpleteTodo'

import { FlashContext } from './providers/FlashProvider';
import { InconpleteTodoContext } from './providers/InconpleteTodoProvider';
import { ConpleteTodoContext } from './providers/ConpleteTodoProvider';

export const App = () => {
  const { setFlashFlag } = useContext(FlashContext)
  const { inconpleteTodos } = useContext(InconpleteTodoContext)
  const { conpleteTodos } = useContext(ConpleteTodoContext)

  useEffect(() => {
    setFlashFlag('')
  },[inconpleteTodos, conpleteTodos])

  return (
    <>
      <div className="container-fluid">
        <div className="bg-dark text-warning pt-2 pb-1 px-4 my-2 ">
          <h1>TODO_APP</h1>
        </div>
        <InputTodo />
        <InconpleteTodo />
        <ConpleteTodo />
      </div>
    </>
  );
}

