import angular from 'angular'

angular.module('leaf', []).component('leaf', {
  templateUrl: 'templates/non-leaf/leaf.tpl.html',
  bindings: {
    name: '<',
  },
})
