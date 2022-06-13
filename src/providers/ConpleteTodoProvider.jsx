import React, { createContext, useState } from 'react';

export const ConpleteTodoContext = createContext({});

export const ConpleteTodoProvider = (props) => {
  const { children } = props;
  const[ conpleteTodos, setConpleteTodos ] = useState([])

  return (
    <ConpleteTodoContext.Provider value={{ conpleteTodos, setConpleteTodos }} >
      { children }
    </ConpleteTodoContext.Provider>
  )
}