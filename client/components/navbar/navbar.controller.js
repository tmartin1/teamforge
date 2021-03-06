'use strict';

angular.module('teamforgeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      { 'title': 'Home', 'link': '/home' },
      { 'title': 'My Projects', 'link': '/my-projects' },
      { 'title': 'New Project', 'link': '/create-project' }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });