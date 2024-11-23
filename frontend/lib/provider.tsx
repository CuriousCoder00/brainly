import React from 'react'
import { ContextProvider } from './context/context-provider'

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <ContextProvider>
      {children}
    </ContextProvider>
  )
}

export default Provider
