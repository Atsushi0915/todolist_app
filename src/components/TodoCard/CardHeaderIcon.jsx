import React,{ memo } from "react";
import { FiCheckSquare, FiEdit3 } from "react-icons/fi";
import { RiEraserLine } from "react-icons/ri";
import styled from "styled-components";

export const CardHeaderIcon = memo((props) => {
  const { cardHeaderIcon } = props;

  return (
    <>
      {(cardHeaderIcon === 'FiEdit3') && <SFiEdit3 className={BFiEdit3}/>} 
      {(cardHeaderIcon === 'FiCheckSquare') && <SFiCheckSquare className={BFiCheckSquare}/>} 
      {(cardHeaderIcon === 'RiEraserLine') && <SRiEraserLine className={BRiEraserLine}/>} 
    </>
  )
})

 
const BFiEdit3 = 'me-3'
const SFiEdit3 = styled(FiEdit3)`
  color: #848484;
`

const BFiCheckSquare = 'me-3'
const SFiCheckSquare = styled(FiCheckSquare)`
  color: #848484;
`

const BRiEraserLine = 'me-3'
const SRiEraserLine = styled(RiEraserLine)`
  color: #6a1313;
`
