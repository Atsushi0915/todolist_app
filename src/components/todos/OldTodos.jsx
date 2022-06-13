import React, { memo, useContext } from "react";
import styled from "styled-components";
import { OldTodoContext } from "../../providers/OldTodoProvider";
import { SearchNameContext } from "../../providers/SearchNameProvider";
import { SearchTodo } from "../inputform/SearchTodo";
import { TodoCard } from "../todoCard/TodoCard";

export const OldTodos = memo(() => {
  const { oldTodos } = useContext(OldTodoContext)
  const { searchName } = useContext(SearchNameContext)

  const searchTodos = oldTodos.filter((value) => {
    if (searchName === '') {
      return value
    } else if (value.includes(searchName)) {
      return value
    } else {
      return ''
    }
  })

  return (
    <>
      <TodoCard cardHeaderColor={'#cc6fe4'}
                cardBodyColor={'#f9d5fd'}
                cardTitle={'過去のタスク一覧'}
                cardMessage={`過去に削除したタスクは${oldTodos.length}件です。`} >
        <SearchTodo />         
        {searchTodos.length === 0?(
          <SSearchMessage>※ 該当するタスクはありません。</SSearchMessage>
          ) : (
          searchTodos.map((todo,index) => {
            return (
              <SListDiv key={todo} className={BListDiv}>
                <li>{index+1} : {todo}</li>
              </SListDiv>
            )
          })
        )}
      </TodoCard>
    </>
  )
})

// ######## styled ################################################

const SSearchMessage = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #a70000;
`

const BListDiv = 'border-top pt-3 align-items-center my-2'
const SListDiv = styled.div`
`