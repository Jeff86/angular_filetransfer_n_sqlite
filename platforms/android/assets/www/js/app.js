// PrixLa Boutique app
angular.module('test_app', ['ui.router', 'ui.bootstrap', 'test_app.controllers'])

.run(function() {

	//-- Init
})


.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/appdownload');
 
	$stateProvider
		.state('app', {
			url:'/app',
			templateUrl: 'templates/menu.html',
			controller: 'AppController'
		})
		.state('app.download', {
			url:'download',
			templateUrl: 'templates/download.html',
			controller: 'DownloadController'
		})
		.state('app.sql', {
			url:'sql',
			templateUrl: 'templates/sql.html',
			controller: 'SqlController'
		});
});
