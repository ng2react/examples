import angular from 'angular'
import './multiple-patterns.component'
import './app.less'
import { angularize } from '@ng2react/support'
import MultiplePatternsUsage from '../../react/multiple-patterns/MultiplePatternsUsage'

const app = angular.module('multiplePatternsApp', ['multiplePatterns']).component('multiplePatternsApp', {
  controller: function ($scope, myService) {
    $scope.message = () => myService.message
    $scope.state = {
      firstState: 'A',
      firstStateLabel: 'A',
      secondState: 'B',
      secondStateLabel: 'B',
      currentState: 'A',
      firstStateTooltip: 'First state',
      secondStateTooltip: 'Second state',
    }
  },
  template: require('./app.tpl.html'),
})

angularize(MultiplePatternsUsage, {
  name: 'multiplePatternsReact',
  module: app,
  bindings: {
    text: '@',
    firstState: '@',
    firstStateLabel: '@',
    secondState: '@',
    secondStateLabel: '@',
    currentState: ['=', 'onCurrentStateChange'],
    firstStateTooltip: '@',
    secondStateTooltip: '@',
    tooltipPosition: '@?',
  },
})
