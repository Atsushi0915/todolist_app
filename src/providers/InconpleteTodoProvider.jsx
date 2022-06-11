import React, { createContext, useState } from "react";

export const InconpleteTodoContext = createContext({})

export const InconpleteTodoProvider = (props) => {
  const { children } = props;
  const [ inconpleteTodos, setInconpleteTodos ] = useState([])

  return (
    <InconpleteTodoContext.Provider value={{inconpleteTodos, setInconpleteTodos}} >
      { children }
    </InconpleteTodoContext.Provider>
  )
}