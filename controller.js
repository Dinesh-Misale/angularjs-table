var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, myService) {
    
        myService.getData().then((data)=>{
            $scope.data = data;
        })
   
});
