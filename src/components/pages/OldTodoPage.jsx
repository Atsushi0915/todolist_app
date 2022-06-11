import styled from "styled-components";
import { Header } from "../layout/Header";

export const OldTodoPage = () => {
  return (
    <>
      <SContainerDiv className={BContainerDiv}>
        <Header />
        <h1>OldTodosです。</h1>
      </SContainerDiv>
    </>
  )
}


// ######## styled ################################################

const BContainerDiv = 'container-fluid';
const SContainerDiv = styled.div`
`
