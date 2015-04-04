// PrixLa Boutique app
angular.module('test_app', ['ui.router', 'ui.bootstrap', 'test_app.controllers'])

.run(function() {

	//-- Init
})

//-- Service de login
.service('sDB', function($http, $q)
{
	//-- select openDatabase for Safari local testing or sqlitePlugin for device Android
	
	var db = window.openDatabase("test_db", "1.0", "Test DB", 10485760); //-- Safari & co
	// var db = window.sqlitePlugin.openDatabase({name: "test_db", location: 2}); //-- TO ADAPT with SQLite

	return {
		doit: function()
		{
			return db;
		}
	}
})



.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/app');
 
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
