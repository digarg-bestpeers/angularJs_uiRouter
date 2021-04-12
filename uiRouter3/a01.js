var app = angular.module('app', ['ui.router'])

app.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('root', {
        url: '/',
        template: '<strong>This is root page..</strong>'
    })
    .state('calc', {
        url: '/calc',
        templateUrl: 'calc.html',
        controller: 'calcController'
    })
    .state('add', {
        url: '/add/:a/:b',
        templateUrl: 'result.html',
        controller: 'addController',
        data: {
            multiplier: 10
        }
    })
    .state('otherwise', {
        url: '*path',
        template: '<strong>No route available..</strong>'
    })
}])


app.controller('calcController', ['$scope','$state', function($scope,$state){
    $scope.a = 0
    $scope.b = 0

    $scope.doAdd = function(){
        $state.go('add', {
            a: $scope.a,
            b: $scope.b
        })
    }
}])

app.controller('addController', ['$scope','$stateParams','$state','dataService', function($scope,$stateParams,$state,dataService){

    console.log($state.get('add'))

    $scope.a = 0
    $scope.b = 0

    if($stateParams.a){
        $scope.a = $stateParams.a
    }

    if($stateParams.b){
        $scope.b = $stateParams.b
    }

    $scope.goBack = function(){
        $state.go('calc');
        console.log($state)
    }

    // $scope.result = (parseInt($scope.a) + parseInt($scope.b)) * $state.current.data.multiplier

    dataService.add($scope.a, $scope.b).then(function(r){
        $scope.result = r.data * $state.current.data.multiplier;
    })
}])