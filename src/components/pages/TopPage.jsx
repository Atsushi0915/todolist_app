import React from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import Button from '@material-ui/core/Button';


export const TopPage = () => {
  const navigate = useNavigate();

  const onClickTop = () => {
    navigate('/todos')
  }

  const onClickGitHub = () => {
    window.open('https://github.com/Atsushi0915/todolist_app','_blank')
  }

  return (
    <>
      <STopDiv>
        <STopMessageDiv>
          <STopMainH2>TODOリスト</STopMainH2>
          <StopMainP>
            あなたがやるべき事はなんですか？
          </StopMainP>
          <STopButton  onClick={onClickTop}
                       className={BTopButton}>
            リスト作成
          </STopButton>
          <SGitHubDiv className={BGitHubDiv} >
            <IconContext.Provider value={{ color: '#000000', size: '70px' }}>
              <Button onClick={onClickGitHub}>
                <AiFillGithub/>
              </Button>
            </IconContext.Provider>
          </SGitHubDiv>
        </STopMessageDiv>
      </STopDiv>
    </>
  )
}

// ######## styled ################################################


const STopDiv = styled.div`
  padding: 200px 0 100px;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  font-style: italic;
  background-position: center 50%;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80");
  background-color:rgba(255,255,255,0.7);
  background-blend-mode:lighten;
`

const STopMessageDiv = styled.div`
  position: relative;
`

const STopMainH2 = styled.h2`
  color: #000064;
  font-size: 70px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 20px;
`

const StopMainP = styled.p`
  color: #000064;
  font-size: 32px;
`

const BTopButton = 'btn btn-dark mt-5 px-4 py-2'
const STopButton = styled.button`
  font-size: 22px;
  background-color: rgb(2, 184, 197);
  border-radius: 9999px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #00d5ff;
  }
`

const BGitHubDiv = '';
const SGitHubDiv = styled.div`
  margin-top: 40px;
`