'use strict';

var HW_URL = "http://app.hydrantwiki.com";

// Declare app level module which depends on views, and components
var hydrantWikiApp = angular.module('HydrantWiki', [
  'ngRoute',
  'HydrantWiki.version'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'views/login.html'
      }).when('/logout', {
        templateUrl: 'views/logout.html'
      }).when('/home', {
          templateUrl: 'views/home.html'
      }).when('/tag', {
          templateUrl: 'views/tag.html'
      }).when('/near', {
          templateUrl: 'views/near.html'
      }).otherwise({redirectTo: '/login'});
}]);

