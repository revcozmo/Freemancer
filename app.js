var freemancer = angular.module("freemancer", ["ui.router"]);

freemancer.config(function($stateProvider) {
  $stateProvider.state("main", {
    url: "",
    views: {
      "jumbotron": {
        templateUrl: "partials/jumbotron.html"
      },
      "hirebox": {
        templateUrl: "partials/hirebox.html"
      },
      "workbox": {
        templateUrl: "partials/workbox.html"
      },
      "loginbox": {
        templateUrl: "partials/loginbox.html"
      },
      "signupbox": {
        templateUrl: "partials/signupbox.html"
      }
    }
  });
});

freemancer.directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "partials/navigation.html",
    controller: "FreemancerCtrl"
  }
});

freemancer.controller("FreemancerCtrl", function FreemancerCtrl($scope) {
  $scope.toggleHirebox = function() {
    $scope.hire = ! $scope.hire;
  };

  $scope.toggleWorkbox = function() {
    $scope.work = ! $scope.work;
  };

  $scope.toggleLoginbox = function() {
    $scope.login = ! $scope.login;
  };

  $scope.toggleSignupbox = function() {
    $scope.signup = ! $scope.signup;
  };
});
