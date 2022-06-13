import React, { createContext, useState } from 'react';

export const FlashContext = createContext({});

export const FlashProvider = (props) => {
  const { children } = props;
  const [ flashFlag, setFlashFlag ] = useState('')

  return (
    <FlashContext.Provider value={{ flashFlag, setFlashFlag }}>
      {children}
    </FlashContext.Provider>
  )
}