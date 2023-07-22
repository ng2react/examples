import angular from 'angular'
import './wrapper.component'
import './app.less'
import { angularize } from '@ng2react/support'
import WrapperUsage from '../../react/transclude/WrapperUsage'

const app = angular
  .module('transcludeExampleApp', ['wrapper'])
  .component('transcludeExampleApp', {
    controller: function ($scope) {},
    template: require('./app.tpl.html'),
  })
  .component('wrappedComponent', {
    template: 'How will GPT cope with this?',
  })

angularize(WrapperUsage, {
  name: 'wrapperReact',
  module: app,
  bindings: {
    text: '@',
  },
})
