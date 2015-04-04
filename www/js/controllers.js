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


//-- **************** WORKS STARTS BELOW ******************************


.controller('DownloadController', function($scope)
{

	console.log("download");

	$scope.goDownload = function()
	{
		//-- DO THE UPDATE HERE, do the example there: http://ngcordova.com/docs/plugins/fileTransfer/
		console.log("launch a download test img");
	};
	

})


.controller('SqlController', function($scope, sDB, $timeout)
{

	$scope.sql_results = "";

	console.log("sql");

	$scope.errorlog = function(err)
	{
		console.log("Error processing SQL: "+err.code);
	};

	$scope.readit = function(tx, results)
	{
		var len = results.rows.length;
		var temp = "";
		for (var i=0; i<len; i++)
		{
			console.log(results.rows.item(i));
			temp = temp + results.rows.item(i).name + " ";
		}

		$timeout(function(ras) {
			$scope.sql_results = temp;
		}, 100);

	};


	$scope.goSQL = function()
	{
		//-- DO THE UPDATE HERE, do the below example using http://ngcordova.com/docs/plugins/sqlite/
		console.log("ng-cordova sqlite test");

		var db = sDB.doit(); //-- Get the DB (for safari testing I'm using "openDatabase" but I want you to use the SQLite ng-cordova plugin to do the same)

		//-- Insert some data
		db.transaction(function(tx)
		{
			tx.executeSql('DROP TABLE IF EXISTS TEST');
			tx.executeSql('CREATE TABLE IF NOT EXISTS TEST (id, name, number)');

			var id_input = 0; var name_input = "test1"; var number_input = 123;
			tx.executeSql('INSERT INTO TEST (id, name, number) VALUES (?, ?, ?)',[id_input, name_input, number_input]);

			id_input = 1; name_input = "test2"; number_input = 566;
			tx.executeSql('INSERT INTO TEST (id, name, number) VALUES (?, ?, ?)',[id_input, name_input, number_input]);

			id_input = 2; name_input = "test3"; number_input = 5664;
			tx.executeSql('INSERT INTO TEST (id, name, number) VALUES (?, ?, ?)',[id_input, name_input, number_input]);


		}, $scope.errorlog);

		//-- And then read them
		db.transaction(function(tx)
		{
			tx.executeSql('SELECT * FROM TEST', [], $scope.readit, $scope.errorlog);
		}, $scope.errorlog);

	};
	

});







