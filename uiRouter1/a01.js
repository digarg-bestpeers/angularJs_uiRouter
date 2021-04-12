var app = angular.module("app", ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('firstMessage', {
        url: '/first-msg',
        template: "<strong>This is first message</strong>"
    })
    .state('firstMessage1',{
        url: '/first-msg1',
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('secondMessage',{
        url: '/second-msg',
        templateUrl: 'msg2.html',
        controller: 'msg2Controller'
    })
    .state('root',{
        url: '/',
        template: '<strong>You are at root page..,,</strong>'
    })
    // .state('noroute', {
    //     url: '*path',
    //     template: '<strong>No content available...click on any link..</strong>'
    // })

    $urlRouterProvider.otherwise('/');
}])


app.controller('msg1Controller', ['$scope', function($scope){
    $scope.a = 10
    $scope.b = 20
}])


app.controller('msg2Controller', ['$scope', function($scope){
    $scope.c = 30
    $scope.d = 40
}])


