import React, { useContext, useEffect} from 'react'
import styled from 'styled-components';

import { InputTodo }  from './components/InputTodo/InputTodo'
import { InconpleteTodo } from './components/Todos/InconpleteTodo'
import { ConpleteTodo } from './components/Todos/ConpleteTodo'

import { FlashContext } from './providers/FlashProvider';
import { InconpleteTodoContext } from './providers/InconpleteTodoProvider';
import { ConpleteTodoContext } from './providers/ConpleteTodoProvider';


export const TodoApp = () => {
  const { setFlashFlag } = useContext(FlashContext)
  const { inconpleteTodos } = useContext(InconpleteTodoContext)
  const { conpleteTodos } = useContext(ConpleteTodoContext)

  useEffect(() => {
    setFlashFlag('')
  },[inconpleteTodos, conpleteTodos])

  return (
    <>
      <SContainerDiv className={BContainerDiv}>
        <STopHeaderDiv className={BTopHeaderDiv}>
          TODO_APP
        </STopHeaderDiv>

        <InputTodo />
        <InconpleteTodo />
        <ConpleteTodo />
      </SContainerDiv>
    </>
  );
}


// ######## styled ################################################

const BContainerDiv = 'container-fluid';
const SContainerDiv = styled.div`
`

const BTopHeaderDiv = 'bg-dark text-warning h1 py-2 px-4 my-2';
const STopHeaderDiv = styled.div`
`
