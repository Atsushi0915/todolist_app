import React, { useContext, useEffect} from 'react';

import { InputTodo }  from '../inputform/InputTodo';
import { InconpleteTodo } from '../Todos/InconpleteTodo';
import { ConpleteTodo } from '../Todos/ConpleteTodo';

import { FlashContext } from '../../providers/FlashProvider';
import { InconpleteTodoContext } from '../../providers/InconpleteTodoProvider';
import { ConpleteTodoContext } from '../../providers/ConpleteTodoProvider';
import { SampleData } from '../../sampledata/SampleData';
import { OldTodoContext } from '../../providers/OldTodoProvider';


export const TodoListPage = () => {
  const { setFlashFlag } = useContext(FlashContext)
  const { inconpleteTodos } = useContext(InconpleteTodoContext)
  const { conpleteTodos } = useContext(ConpleteTodoContext)
  const { oldTodos } = useContext(OldTodoContext)

  useEffect(() => {
    setFlashFlag('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inconpleteTodos, conpleteTodos])

  const AllData = [...inconpleteTodos, ...conpleteTodos, ...oldTodos]

  return (
    <>
      {AllData.length === 0 && <SampleData />}
      <InputTodo />
      <InconpleteTodo />
      <ConpleteTodo />
    </>
  );
}



