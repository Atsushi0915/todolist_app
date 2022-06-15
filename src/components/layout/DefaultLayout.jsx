import { Header } from "./Header";
import styled from "styled-components";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <SContainerDiv className={BContainerDiv}>
        { children }
      </SContainerDiv>
    </>
  )
}


// ######## styled ###############################################

const BContainerDiv = 'container-fluid';
const SContainerDiv = styled.div`
  background-color: #40dfff39;
  position: absolute;
  width: 100%;
  min-height: 100%;
`