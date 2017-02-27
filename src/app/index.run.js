(function() {
  'use strict';

  angular
    .module('yeomanNewProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
