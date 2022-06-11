import React from "react"
import styled from "styled-components"

export const TodoCard = (props) => {
  const { children, 
          cardHeaderColor,  
          cardBodyColor, 
          cardTitle, 
          cardMessage } = props

  return (
    <SCardDiv className={BCardDiv} >
      <SCardHeaderDiv cardHeaderColor={cardHeaderColor} className={BCardHeaderDiv} >
        {cardTitle}
      </SCardHeaderDiv>

      <SCardBodyDiv cardBodyColor={cardBodyColor} className={BCardBodyDiv} >

        <SCardMessageDiv className={BCradMessageDiv}>
          {cardMessage}
        </SCardMessageDiv>

        <SCardListul className={BCardListUl}>
          {children}
        </SCardListul >

      </SCardBodyDiv>
    </SCardDiv>
  )
}

// ######## styled ################################################

const BCardDiv = 'card my-2';
const SCardDiv = styled.div`
`

const BCardHeaderDiv = 'card-header h3';
const SCardHeaderDiv = styled.div`
  background-color: ${props => props.cardHeaderColor};
`

const BCardBodyDiv = 'card-body';
const SCardBodyDiv = styled.div`
  background-color: ${props => props.cardBodyColor};
`
const BCradMessageDiv = 'pb-2 h6';
const SCardMessageDiv = styled.div`
`

const BCardListUl = 'list-unstyled';
const SCardListul = styled.ul`
`