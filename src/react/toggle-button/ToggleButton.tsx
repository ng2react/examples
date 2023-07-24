import React from 'react'

type Props = {
  firstState: string
  firstStateLabel: string
  secondState: string
  secondStateLabel: string
  currentState: string
  onCurrentStateChange: (newValue: string) => void
  firstStateTooltip: string
  secondStateTooltip: string
  tooltipPosition?: 'left' | 'bottom-left' | 'bottom-right' | 'right'
}

const ToggleButton = ({
  firstState,
  firstStateLabel,
  secondState,
  secondStateLabel,
  currentState,
  onCurrentStateChange,
  firstStateTooltip,
  secondStateTooltip,
  tooltipPosition = 'right',
}: Props) => {
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
    <div className="toggle-button" onClick={toggle}>
      <p
        id="toggle-button__firstState"
        className={`toggle-button__label ${currentState === secondState ? 'toggle-button__label--fade' : ''}`}
      >
        {firstStateLabel}
      </p>
      <div
        className={`toggle-button__switch ${getTooltipPositionClass()}`}
        title={currentState === firstState ? firstStateTooltip : secondStateTooltip}
      >
        <span
          className={`fa fa-plus-circle ${currentState === secondState ? 'toggle-button__switch--toggleState' : ''}`}
        ></span>
      </div>
      <p
        id="toggle-button__secondState"
        className={`toggle-button__label ${currentState === firstState ? 'toggle-button__label--fade' : ''}`}
      >
        {secondStateLabel}
      </p>
    </div>
  )
}

export default ToggleButton
