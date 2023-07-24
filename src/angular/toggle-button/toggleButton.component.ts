/*!
 * Copyright 2021-2022 Bosch Automotive Service Solutions Limited
 * All rights reserved.
 */

import * as angular from 'angular'
import { isNil } from 'lodash'

class ToggleButtonCtrl implements angular.IController {
  public readonly firstState!: string
  public readonly firstStateLabel!: string
  public readonly secondState!: string
  public readonly secondStateLabel!: string
  public readonly firstStateTooltip!: string
  public readonly secondStateTooltip!: string
  public readonly tooltipPosition!: 'left' | 'bottom-left' | 'bottom-right' | 'right'
  public currentState!: string

  public $onInit() {
    if (isNil(this.currentState)) {
      this.currentState = this.firstState
    }
  }

  public getTooltipPositionClass() {
    switch (this.tooltipPosition) {
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

  public toggle() {
    this.currentState = this.currentState === this.firstState ? this.secondState : this.firstState
  }
}

angular.module('toggleButton', []).component('toggleButton', {
  require: {},
  bindings: {
    firstState: '@',
    firstStateLabel: '@',
    secondState: '@',
    secondStateLabel: '@',
    currentState: '=',
    firstStateTooltip: '@',
    secondStateTooltip: '@',
    tooltipPosition: '@?',
  },
  controller: ToggleButtonCtrl,
  templateUrl: 'templates/toggle-button/toggleButton.tpl.html',
})
