// JavaScript File
var application = angular.module("MyApp", []);

application.controller("ctrl", function ctrl ($scope){
    
    $scope.details = {
        
        name: "Test"
        
    },
    
    $scope.address = "plm"
});