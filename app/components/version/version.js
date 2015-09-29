'use strict';

angular.module('HydrantWiki.version', [
  'HydrantWiki.version.interpolate-filter',
  'HydrantWiki.version.version-directive'
])

.value('version', '0.1');
