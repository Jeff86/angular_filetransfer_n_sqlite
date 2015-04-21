angular.module('test_app.controllers', ['angular-useragent-parser', 'angular-virtual-keyboard'])

/*.config(function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	})*/
      
.config(['VKI_CONFIG', function(VKI_CONFIG) {
            VKI_CONFIG['showInMobile'] = true;
            VKI_CONFIG.layout['Portugu\u00eas Brasileiro'] = {
                'name': "Portuguese (Brazil)", 'keys': [
                [["'", '"'], ["1", "!", "\u00b9"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a3"], ["5", "%", "\u00a2"], ["6", "\u00a8", "\u00ac"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+", "\u00a7"], ["Bksp", "Bksp"]],
                [["Tab", "Tab"], ["q", "Q", "/"], ["w", "W", "?"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00b4", "`"], ["[", "{", "\u00aa"], ["Enter", "Enter"]],
                [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e7", "\u00c7"], ["~", "^"], ["]", "}", "\u00ba"], ["/", "?"]],
                [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C", "\u20a2"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], [":", ":"], ["Shift", "Shift"]],
                [[" ", " ", " ", " "], ["AltGr", "AltGr"]]
            ], 'lang': ["pt-BR"] };

            VKI_CONFIG.layout.Numerico = {
                'name': "Numerico", 'keys': [
                [["1", '1'], ["2", "2"], ["3", "3"], ["Bksp", "Bksp"]],
                [["4", "4"], ["5", "5"], ["6", '6'], ["Enter", "Enter"]],
                [["7", "7"], ["8", "8"], ["9", "9"], []],
                [["0", "0"], [], ["."]]
            ], 'lang': ["pt-BR-num"] };

            /* CHANGE TEXT LANGUAGE */
            // VKI_CONFIG.VKI_i18n = {
            //     '00': "Exibir teclado numérico",
            //     '01': "Exibir teclado virtual",
            //     '02': "Selecionar layout do teclado",
            //     '03': "Teclas mortas",
            //     '04': "Ligado",
            //     '05': "Desligado",
            //     '06': "Fechar teclado",
            //     '07': "Limpar",
            //     '08': "Limpar campo",
            //     '09': "Versão",
            //     '10': "Diminuir tamanho do teclado",
            //     '11': "Aumentar tamanho do teclado"
            // };

            // VKI_CONFIG.relative = true;
        }])

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

    $scope.formCrea.input_number = 123.85;

	$scope.popKeyboard = function(elem, layout)
	{
		//-- The virtual keyboard will be linked to input id "elem" available via "document.getElementById(elem);"

		console.log("Lets show the virtual keyboard on input: "+elem+" with layout: "+layout);
	};
	

})


.controller('SqlController', function($scope, $timeout)
{

	

});







