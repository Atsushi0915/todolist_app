import React, { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlashContext } from "../../providers/FlashProvider";
import { OldTodoContext } from "../../providers/OldTodoProvider";
import { SearchNameContext } from "../../providers/SearchNameProvider";
import { SearchTodo } from "../inputform/SearchTodo";
import { TodoCard } from "../TodoCard/TodoCard";


export const OldTodos = memo(() => {
  const { oldTodos, setOldTodos } = useContext(OldTodoContext)
  const { searchName } = useContext(SearchNameContext)
  const { setFlashFlag } = useContext(FlashContext)
  const navigate = useNavigate()

  const searchTodos = oldTodos.filter((value) => {
    if (searchName === '') {
      return value
    } else if (value.includes(searchName)) {
      return value
    } else {
      return ''
    }
  })

  const onClickOldDelete = () => {
    const sure = window.confirm('過去のタスクを削除しますか？');
    if (sure) {
      setOldTodos([])
      setFlashFlag('allDelete')
      navigate('/todos')
    }
  }

  return (
    <>
      <TodoCard cardHeaderColor={'#9d00ff92'}
                cardBodyColor={'#f9f4fabf'}
                cardTitle={'過去のタスク一覧'}
                cardMessage={`過去に削除したタスクは${oldTodos.length}件です。`} >

        <SearchTodo >
          <SOldDeleteButton onClick={onClickOldDelete}
                            className={BOldDeleteButton} >
            全件削除
          </SOldDeleteButton>
        </SearchTodo>
      
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


const BOldDeleteButton = "btn btn-danger mx-4"
const SOldDeleteButton = styled.button`
  font-size: 14px;
  background-color: #ff0000;
  border-radius: 10px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #f985b1;
  }
`

const SSearchMessage = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #a70000;
`

const BListDiv = 'border-top pt-3 align-items-center my-2'
const SListDiv = styled.div`
`