(function() {

  'use strict';

  angular.module('experiments.views.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'views/view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'MockPosts', function($scope, MockPosts) {

    MockPosts.query(function(data) {
      $scope.posts = data;
    });

  }]);

})();
