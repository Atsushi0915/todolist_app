import React, { createContext, useState } from "react";

export const OldTodoContext = createContext({});

export const OldTodoProvider = (props) => {
  const { children } = props;
  const [ oldTodos, setOldTodos ] = useState([])

  return (
    <OldTodoContext.Provider value={{oldTodos, setOldTodos}}>
      { children }
    </OldTodoContext.Provider>
  )
}