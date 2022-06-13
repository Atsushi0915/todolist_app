import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { SearchNameContext } from '../../providers/SearchNameProvider';


export const SearchTodo = memo((props) => {
  const {children} = props

  const { searchName, setSearchName } = useContext(SearchNameContext)

  const onChangeSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return(
    <>
      <SSearchFormDiv className={BSearchFormDiv}>
        <SSearchInput type='text'
                      placeholder='タスク検索' 
                      value={searchName} 
                      onChange={onChangeSearchName} 
                      className={BSearchInput} />
        {children}
               
      </SSearchFormDiv>
    </>
  )
})

// ######## styled ################################################


const BSearchFormDiv = "d-flex flex-row my-2"
const SSearchFormDiv = styled.div`
`

const BSearchInput = "form-control w-75 pr-3"
const SSearchInput = styled.input`
  border-radius: 5px;
`
