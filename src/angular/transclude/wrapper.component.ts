/*!
 * Copyright 2021-2022 Bosch Automotive Service Solutions Limited
 * All rights reserved.
 */

import * as angular from 'angular'

angular.module('wrapper', []).component('wrapper', {
  transclude: true,
  template: '<div class="wrappedContentContainer">The following content has been wrapped:<br/><ng-transclude></ng-transclude><br/>The end</div>',
})
