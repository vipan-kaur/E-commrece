import React, { createContext, useState } from 'react'

export const searchContext = createContext()
const SearchProvider = ({children}) => {
    const[search,setsearch]=useState("")
  return (
    <searchContext.Provider value={{search,setsearch}}>
        {children}
    </searchContext.Provider>
  )
}

export default SearchProvider