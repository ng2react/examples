import React from 'react'

const Wrapper = ({ children }) => {
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
