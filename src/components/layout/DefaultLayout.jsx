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
  background-color: #64a3b039;
  position: absolute;
  width: 100%;
  height: auto;
  min-height: 100%;
  background-position: center 50%;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
  background-color:rgba(255,255,255,0.6);
  background-blend-mode:lighten;
`