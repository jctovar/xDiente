angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CalendarCtrl', function($scope, $http) {

	var responsePromise = $http.get("http://xdiente.goritec.com/rest/calendar");

    responsePromise.success(function(data, status, headers, config) {
        $scope.Dates = data;
    });
    
    responsePromise.error(function(data, status, headers, config) {
        alert("Error de conexion...!");
    });
})

.controller('PatientsCtrl', function($scope, $http) {

	$scope.data = {};

	responsePromise = $http.get("http://xdiente.goritec.com/api/patients/users/format/json");

    responsePromise.success(function(data, status, headers, config) {
        $scope.Products = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        alert("Error de conexion...!");
    });
    $scope.clearSearch = function() {
	    $scope.data.searchQuery = '';
	    console.log('Clear...');
	};
	$scope.view = function(item) {
		console.log('View...'+item);
		window.location = '#/app/patient/'+item;
	};
	
	$scope.edit = function(item) {
		console.log('Edit...'+item);
	};
})

.controller('DateCtrl', function($scope, $stateParams, $http) {

	console.log("buscando por el id:"+ $stateParams.dateId);
	
	// Declara var myData
    $scope.myData = {};
	
	searchPatient($stateParams.dateId);
	
	// funcion de buscar producto en el servidor
	function searchPatient(id){
		var responsePromise = $http.get("http://xdiente.goritec.com/rest/date/" + id);
	
	        responsePromise.success(function(data, status, headers, config) {
	            $scope.myData.Firstname = data.firstname;
	            $scope.myData.Lastname = data.lastname;
	            $scope.myData.Date = data.date;
	            $scope.myData.Email = data.email;
	            console.log(id);
	        });
	        responsePromise.error(function(data, status, headers, config) {
	            alert("Error de conexion...!");
	    });
	}

})

.controller('PatientCtrl', function($scope, $stateParams, $http) {

	console.log("buscando por el id:"+ $stateParams.patientId);
	
	// Declara var myData
    $scope.myData = {};
	
	searchPatient($stateParams.patientId);
	
	// funcion de buscar producto en el servidor
	function searchPatient(id){
		var responsePromise = $http.get("http://xdiente.goritec.com/rest/patient/" + id);
	
	        responsePromise.success(function(data, status, headers, config) {
	            $scope.myData.Firstname = data.firstname;
	            $scope.myData.Lastname = data.lastname;
	            $scope.myData.Address1 = data.address_1;
	            $scope.myData.Address2 = data.address_2;
	            $scope.myData.PostalCode = data.postal_code;
	            $scope.myData.Phone1 = data.phone_1;
	            $scope.myData.Phone2 = data.phone_2;
	            $scope.myData.Birthday = data.birthday;
	            $scope.myData.Email = data.email;
	        });
	        responsePromise.error(function(data, status, headers, config) {
	            alert("Sin conexion...!");
	    });
	}

})

.controller('AboutCtrl', function($scope, $cordovaDevice, $cordovaAppVersion) {
	
	document.addEventListener("deviceready", function () {
		
		$scope.deviceUUID = $cordovaDevice.getUUID();
	
		$cordovaAppVersion.getAppVersion().then(function (version) {
			$scope.appVersion = version;
		});
	      
	}, false);

});
