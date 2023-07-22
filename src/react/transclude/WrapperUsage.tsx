import React from 'react'
import Wrapper from './Wrapper'

/**
 * Implementation of transclusion for testing purposes 
 */
export default function WrapperUsage({ text }: { text: string }) {
  return <Wrapper>{text}</Wrapper>
}
