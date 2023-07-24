**Approach:**
- I have renamed the component to ToggleButton
- I have replaced the controller methods with equivalent functions inside the functional component
- I have replaced the AngularJS bindings with React props
- I have replaced the AngularJS template with JSX

**Assumptions:**
- I am assuming that since currentState is a two-way binding, its state is managed by the parent component
- I am assuming that the parent component will pass down a callback function to update the state
- I am assuming that the tooltipPosition prop is optional and defaults to 'right'

**Potential Issues:**
- The AngularJS component uses the ng-class directive to conditionally apply classes. In the React component, I have used the classnames library to achieve the same functionality. If the classnames library is not available, this will need to be replaced with equivalent logic.

```tsx

import React from 'react'
import classnames from 'classnames'

type TooltipPosition = 'left' | 'bottom-left' | 'bottom-right' | 'right'

type Props = {
    firstState: string
    firstStateLabel: string
    secondState: string
    secondStateLabel: string
    currentState: string
    onCurrentStateChange: (newValue: string) => void
    firstStateTooltip: string
    secondStateTooltip: string
    tooltipPosition?: TooltipPosition
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
                className={classnames('toggle-button__label', {
                    'toggle-button__label--fade': currentState === secondState,
                })}
            >
                {firstStateLabel}
            </p>
            <div
                className={classnames('toggle-button__switch', getTooltipPositionClass())}
                data-tooltip={currentState === firstState ? firstStateTooltip : secondStateTooltip}
            >
                <span
                    className={classnames('fa fa-plus-circle', {
                        'toggle-button__switch--toggleState': currentState === secondState,
                    })}
                />
            </div>
            <p
                id="toggle-button__secondState"
                className={classnames('toggle-button__label', {
                    'toggle-button__label--fade': currentState === firstState,
                })}
            >
                {secondStateLabel}
            </p>
        </div>
    )
}

export default ToggleButton

```