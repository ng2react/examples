import React, { useState, useEffect } from 'react'
import { useService } from '@ng2react/support'
import Leaf from './Leaf'

type Props = {
  firstState: string
  firstStateLabel: string
  secondState: string
  secondStateLabel: string
  currentState: string
  onCurrentStateChange: (newValue: string) => void
  firstStateTooltip: string
  secondStateTooltip: string
  tooltipPosition: 'left' | 'bottom-left' | 'bottom-right' | 'right',
  children: React.ReactNode
}

const MultiplePatterns = ({
  firstState,
  firstStateLabel,
  secondState,
  secondStateLabel,
  currentState,
  onCurrentStateChange,
  firstStateTooltip,
  secondStateTooltip,
  tooltipPosition,
  children
}: Props) => {
  const myService = useService('myService') as any
  const [message, setMessage] = useState('')
  const [name, setName] = useState('John Doe')

  useEffect(() => {
    if (!currentState) {
      onCurrentStateChange(firstState)
    }
    myService.getMessage().then(setMessage).catch((err: Error) => setMessage('Error: ' + err.message))
  }, [])

  const updateMessage = async () => {
    try {
      await myService.setMessage(message)
    } catch (e) {
      const err = e as Error
      setMessage('Error: ' + err.message)
    } finally {
      setMessage(await myService.getMessage())
    }
  }

  const getTooltipPositionClass = () => {
    switch (tooltipPosition) {
      case 'left':
        return 'gxmUiTooltip__left'
      case 'bottom-left':
        return 'gxmUiTooltip__bottomLeft'
      case 'bottom-right':
        return 'gxmUiTooltip__bottomRight'
      default:
        return 'gxmUiTooltip__right'
    }
  }

  const toggle = () => {
    onCurrentStateChange(currentState === firstState ? secondState : firstState)
  }

  return (
    <section>
      <div className="serviceInjection">
        <label>
          Message <input value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>{' '}
        <button onClick={updateMessage}>Send</button>
      </div>
      <div className="wrappedContentContainer">
        The following content has been wrapped: {children}
      </div>
      <div className="nonLeaf">
        <label>
          Name <input value={name} onChange={(e) => setName(e.target.value)} name="name" />
        </label>
        <Leaf name={name} />
      </div>
      <div className="toggle-button" onClick={toggle}>
        <p
          id="toggle-button__firstState"
          className={`toggle-button__label ${currentState === secondState ? 'toggle-button__label--fade' : ''}`}
        >
          {firstStateLabel}
        </p>
        <div
          className={`toggle-button__switch ${getTooltipPositionClass()}`}
          data-tooltip={currentState === firstState ? firstStateTooltip : secondStateTooltip}
        >
          <span className={`fa fa-plus-circle ${currentState === secondState ? 'toggle-button__switch--toggleState' : ''}`}></span>
        </div>
        <p
          id="toggle-button__secondState"
          className={`toggle-button__label ${currentState === firstState ? 'toggle-button__label--fade' : ''}`}
        >
          {secondStateLabel}
        </p>
      </div>
    </section>
  )
}

export default MultiplePatterns
