import React, { useContext, useEffect} from 'react';
import styled from 'styled-components';

import { InputTodo }  from '../inputform/InputTodo';
import { InconpleteTodo } from '../Todos/InconpleteTodo';
import { ConpleteTodo } from '../Todos/ConpleteTodo';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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


