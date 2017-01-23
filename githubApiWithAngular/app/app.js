var githubApp = angular.module('app', ['ngRoute']);

	// configure our routes
githubApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'gitHubDataController'
			})

			// route for the about page
			.when('/chart/:fullName', {
				template: '<chart title="Line chart example" xData="lineChartXData" yData="lineChartYData" xName="Month" yName="Hit" subtitle="This is an example"></chart>',
				controller: 'MainCtrl'
			})

	})
	
    .controller('gitHubDataController', [function($scope,$http) {
        $http.get("https://api.github.com/search/repositories?q=all+language:all&sort=stars&order=desc")
            .success(function (data) {
                $scope.repoData = data.items;
            });
        $scope.predicate = '-updated_at';
	}]);