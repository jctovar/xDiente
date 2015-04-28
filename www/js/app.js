// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($rootScope, $ionicPlatform, $ionicPopup, $cordovaNetwork, $cordovaDialogs) {
  $ionicPlatform.ready(function() {
  
  	document.addEventListener("deviceready", function () {
	  	$rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
	      //alert('Net is:'+networkState);
	      $cordovaDialogs.alert('Imposible conectarse al servidor, verifique su conexión a internet.', 'Alerta!', 'Aceptar')
		    .then(function() {
		      // callback success
		  });
	    })
	}, false);
  
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
  .state('app.calendar', {
    url: "/calendar",
    views: {
      'menuContent': {
        templateUrl: "templates/calendar.html",
          controller: 'CalendarCtrl'
      }
    }
  })
  
  .state('app.date', {
    url: "/date/:dateId",
    views: {
      'menuContent': {
        templateUrl: "templates/date.html",
          controller: 'DateCtrl'
      }
    }
  })

  .state('app.patients', {
    url: "/patients",
    views: {
      'menuContent': {
        templateUrl: "templates/patients.html",
          controller: 'PatientsCtrl'
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
          controller: 'AboutCtrl'
      }
    }
  })

  .state('app.patient', {
    url: "/patient/:patientId",
    views: {
      'menuContent': {
        templateUrl: "templates/patient.html",
        controller: 'PatientCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/calendar');
});
