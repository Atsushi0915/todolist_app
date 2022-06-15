import React, { useContext } from "react"
import styled from "styled-components"
import { ConpleteTodoContext } from "../providers/ConpleteTodoProvider"
import { FlashContext } from "../providers/FlashProvider"
import { InconpleteTodoContext } from "../providers/InconpleteTodoProvider"
import { OldTodoContext } from "../providers/OldTodoProvider"

export const SampleData = () => {
  const { setInconpleteTodos } = useContext(InconpleteTodoContext)
  const { setConpleteTodos } = useContext(ConpleteTodoContext)
  const { setOldTodos } = useContext(OldTodoContext)
  const { setFlashFlag } = useContext(FlashContext)

  const onClickDataInput = () => {
    setInconpleteTodos([
      'Reactの勉強を2時間する',
      'トイレ掃除をする',
      'シャンプーを買いに行く',
      'お好み焼きを作る（晩ごはん）',
      '30分散歩をする'
    ])
    setConpleteTodos([
      'Railsの勉強を2時間する',
      '子供と公園に遊びに行く',
      'ジーパンを買いに行く',
      'ベランダの掃除をする'
    ])
    setOldTodos([
      '子供と自転車に乗る',
      '子供と電車で遊ぶ',
      '子供とお絵かきをする',
      '電車で新宿へ買い物に行く',
      '車に乗ってドライブに行く',
      '新しいタンスの組み立て'
    ])
    setFlashFlag('sampledataSet')
  }


  return (
    <>
      <SSampleFormDiv className={BSampleFormDiv} >
        <STextDiv className={BTextDiv}>サンプルデータ投入 :</STextDiv>
        <SInputButton onClick={onClickDataInput}
                      className={BInputButton}>input</SInputButton>
      </SSampleFormDiv>
    </>
  )
}

const BSampleFormDiv = "d-flex align-items-center flex-row my-2"
const SSampleFormDiv = styled.div`
`

const BTextDiv = "h4 mb-0 mx-2"
const STextDiv = styled.div`
  color: #ff00d4;
  font-weight: bold;
`

const BInputButton = "btn btn-primary mx-2 "
const SInputButton = styled.button`
  background-color: #ff00d4;
  border-radius: 13px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #660085;
  }
`