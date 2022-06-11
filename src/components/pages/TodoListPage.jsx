import React, { useContext, useEffect} from 'react'
import styled from 'styled-components';

import { InputTodo }  from '../todoInput/InputTodo'
import { InconpleteTodo } from '../todos/InconpleteTodo'
import { ConpleteTodo } from '../todos/ConpleteTodo'
import { Header } from '../layout/Header';

import { FlashContext } from '../../providers/FlashProvider';
import { InconpleteTodoContext } from '../../providers/InconpleteTodoProvider';
import { ConpleteTodoContext } from '../../providers/ConpleteTodoProvider';



export const TodoListPage = () => {
  const { setFlashFlag } = useContext(FlashContext)
  const { inconpleteTodos } = useContext(InconpleteTodoContext)
  const { conpleteTodos } = useContext(ConpleteTodoContext)

  useEffect(() => {
    setFlashFlag('')
  },[inconpleteTodos, conpleteTodos])

  return (
    <>
      <SContainerDiv className={BContainerDiv}>
        <Header />
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


