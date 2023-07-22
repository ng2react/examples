import React, { FunctionComponent, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return (
    <div className="wrappedContentContainer">
      The following content has been wrapped:
      <br />
      {children}
      <br />
      The end
    </div>
  )
}

export default Wrapper
