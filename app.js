var app = angular.module("single_pager", [ 'ngRoute' ]);

app.config( function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);
    $routeProvider.when('/', {templateUrl: 'homepage.html' });
    $routeProvider.when('/page1', {templateUrl: 'page1.html' });
    $routeProvider.when('/page2', {templateUrl: 'page2.html'});
    $routeProvider.otherwise({redirectTo: '/'});
});