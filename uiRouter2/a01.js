var app = angular.module('app', ['ui.router'])

app.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('root', {
        url: '/',
        template: '<strong>Welcome to root..click on link</strong>'
    })
    .state('firstMessage', {
        // url: '/first-msg/:a/:b',
        url: '/first-msg/{a}/{b}',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('secondMessage', {
        url: '/second-msg/{a:[0-9]+}/{b}',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('thirdMessage', {
        url: '/third-msg',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('thirdMessage1', {
        url: '/third-msg/:a',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('thirdMessage2', {
        url: '/third-msg/:a/:b',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('fourthMessage', {
        url: '/fourth-msg',   // can not be used as part of routing url
        templateUrl: 'msg1.html',
        controller: 'msgController',
        params: {  // can work with ui sref
            a: {value: '1'}, // default value 1
            b: {value: '2'},  // default value 2
        }
    })
    .state('fifthMessage', {  //works with slashes only in routing url
        url: '/fifth-msg/:a/:b',
        templateUrl: 'msg1.html',
        controller: 'msgController',
        params: {
            a: {value: '1'}, // default value 1
            b: {value: '2'},  // default value 2
        }
    })
    .state('sixthMessage', {
        url: '/sixth-msg/:a/:b',
        templateUrl: 'msg1.html',
        controller: 'msgController',
        params: {
            a: {value: '1', squash:true}, // default value 1
            b: {value: '2', squash:true},  // default value 2
        }
    })
    .state('seventhMessage', {
        url: '/seventh-msg/:a/:b',
        templateUrl: 'msg1.html',
        controller: 'msgController',
        params: {
            a: {value: '1', squash:'-'}, 
            b: {value: '2', squash:'~'},
        }
    })
    .state('eigthMessage', {
        url: '/eigth-msg?a&b',
        templateUrl: 'msg1.html',
        controller: 'msgController'
    })
    .state('ninthMessage', {
        url: '/ninth-msg?a&b',
        templateUrl: 'msg1.html',
        controller: 'msgController',
        params: {
            a: {value: '1'},
            b: {array: true}
        }
    })
    .state('otherwise', {
        url: '*path',
        template: '<strong>click on left pannel link..</strong>'
    })
}])


app.controller('msgController', ['$scope','$stateParams', function($scope,$stateParams){
    $scope.a = $stateParams.a;
    $scope.b = $stateParams.b;
}])


