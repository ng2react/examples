import { angularize } from '@ng2react/support'
import angular from 'angular'
import RequireControllerExample from '../../react/require-controller/RequireControllerExample'
import './parentCtrl'
import './requireControllerExample.component'
const app = angular
  .module('requireControllerExampleApp', ['requireControllerExample', 'parentCtrl'])
  .component('requireControllerExampleApp', {
    template: '<parent-ctrl></parent-ctrl>',
  })

angularize(RequireControllerExample, {
  name: 'requireControllerExampleReact',
  bindings: {
    name: ['=', "setName"],
    status: '<',
    updateStatus: '<'
  },
  module: app,
})
