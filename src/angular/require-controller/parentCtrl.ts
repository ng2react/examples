import angular, { IScope } from 'angular'

export class ParentCtrl {
  private _name = 'Bob'
  private status = 'Waiting for input...'
  constructor(readonly $scope: IScope) {}


  set name(name: string) {
    this._name = name
    this.$scope.$evalAsync()
  }

  get name() {
    return this._name
  }

  getStatus() {
    return this.status
  }

  setName(name: string) {
    this.$scope.$evalAsync(() => {
      this._name = name
    })
  }

  updateStatus(status: string) {
    this.$scope.$evalAsync(() => {
      this.status = status
    })
  }

  onStatusChange(listener: (status: string) => void) {
    return this.$scope.$watch(
      () => this.status,
      (newVal) => listener(newVal)
    )
  }
  onNameChange(listener: (name: string) => void) {
    return this.$scope.$watch(
      () => this.name,
      (newVal) => listener(newVal)
    )
  }
}

angular.module('parentCtrl', []).component('parentCtrl', {
  controller: ParentCtrl,
  template: require('./parentCtrl.tpl.html'),
})
