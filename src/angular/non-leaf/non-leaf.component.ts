import angular from 'angular'
import './leaf.component'
class MyCtrl {
  name = 'John Doe'
}

angular.module('nonLeaf', ['leaf']).component('nonLeaf', {
  controller: MyCtrl,
  templateUrl: 'templates/non-leaf/non-leaf.tpl.html',
})
