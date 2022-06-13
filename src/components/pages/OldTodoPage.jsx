import React from 'react';
import styled from "styled-components";
import { Header } from "../layout/Header";
import { OldTodos } from "../todos/OldTodos";


export const OldTodoPage  = () => {
  return (
    <>
      <SContainerDiv className={BContainerDiv}>
        <Header />
        <OldTodos />
      </SContainerDiv>
    </>
  )
}


// ######## styled ################################################

const BContainerDiv = 'container-fluid';
const SContainerDiv = styled.div`
`
