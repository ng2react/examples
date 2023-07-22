import angular from 'angular'
import './non-leaf.component'
import { angularize } from '@ng2react/support'
import NonLeaf from '../../react/non-leaf/NonLeaf'

const app = angular.module('nonLeafApp', ['nonLeaf'])
  .component('nonLeafApp', {
    templateUrl: 'templates/non-leaf/non-leaf.app.tpl.html'
  })

angularize(NonLeaf, {
  module: app,
  name: 'nonLeafReact'
});