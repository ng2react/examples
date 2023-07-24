import React from 'react'
import MultiplePatterns from './MultiplePatterns'

/**
 * Implementation of transclusion for testing purposes
 */
export default function MultiplePatternsUsage({ text, ...rest }: { text: string } & Record<string, any>) {
  return <MultiplePatterns {...rest}>{text}</MultiplePatterns>
}
