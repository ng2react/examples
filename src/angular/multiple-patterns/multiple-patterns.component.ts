import * as angular from 'angular'
import { MyService } from '../service-injection/myService'
import { isNil } from 'lodash'

class MyCtrl {
  message = ''
  name='John Doe'
  public readonly firstState!: string
  public readonly firstStateLabel!: string
  public readonly secondState!: string
  public readonly secondStateLabel!: string
  public readonly firstStateTooltip!: string
  public readonly secondStateTooltip!: string
  public readonly tooltipPosition!: 'left' | 'bottom-left' | 'bottom-right' | 'right'
  public currentState!: string

  static $inject = ['myService']

  constructor(private readonly myService: MyService) {}

  async $onInit() {
    if (isNil(this.currentState)) {
      this.currentState = this.firstState
    }
    try {
      this.message = await this.myService.getMessage()
    } catch (e) {
      const err = e as Error;
      this.message = 'Error: ' + err.message
    }
  }

  async updateMessage() {
    try {
      await this.myService.setMessage(this.message)
    } catch (e) {
      const err = e as Error;
      this.message = 'Error: ' + err.message
    } finally {
      this.message = await this.myService.getMessage()
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

angular.module('multiplePatterns', ['leaf', 'myService']).component('multiplePatterns', {
  transclude: true,
  templateUrl: 'templates/multiple-patterns/multiple-patterns.tpl.html',
  controller: MyCtrl,
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
})
