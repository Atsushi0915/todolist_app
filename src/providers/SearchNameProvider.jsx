import React, { createContext, useState } from "react";

export const SearchNameContext = createContext({});

export const SearchNameProvider = (props) => {
  const { children } = props;
  const [ searchName, setSearchName ] = useState('')

  return (
    <SearchNameContext.Provider value={{searchName, setSearchName}}>
      { children }
    </SearchNameContext.Provider>
  )
}