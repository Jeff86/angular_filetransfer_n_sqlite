angular.module('test_app.controllers', [])

.config(function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	})

.controller('AppController', function($scope, $state)
{
	//-- Init de mes boutons
	$scope.statebout_app = {};
	$scope.statebout_app.download = "btn-primary";
	$scope.statebout_app.sql = "btn-primary";

	//-- Init du bouton de la page
	var quelbouton = $state.current.name.split('.')[1];
	$scope.statebout_app[quelbouton] = "btn-success";

	$scope.goNav = function(ouca)
	{

		var quelbouton = $state.current.name.split('.')[1];
		$scope.statebout_app[quelbouton] = "btn-primary";
		$scope.statebout_app[ouca] = "btn-success";

		$state.go('app.'+ouca);

	};
	

})


.controller('DownloadController', function($scope)
{

	$scope.formCrea = {};

	$scope.popKeyboard = function(elem, layout)
	{
		//-- The virtual keyboard will be linked to input id "elem" available via "document.getElementById(elem);"

		console.log("Lets show the virtual keyboard on input: "+elem+" with layout: "+layout);
	};
	

})


.controller('SqlController', function($scope, $timeout)
{

	

});







