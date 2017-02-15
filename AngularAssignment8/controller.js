//alert("Entered");
var app = angular.module("myApp", []);
app.controller("myController",function($scope){
	$scope.firstName= "Ujjval";
	$scope.lastName= "Thakkar";
	$scope.fees=500;
	$scope.fullName= $scope.firstName+" "+$scope.lastName;


	$scope.reset = function(){
		$scope.firstName1 = "Ujjval";
		$scope.lastName1 = "Thakkar";
		$scope.email = "hemantthakkar.u@husky.neu.edu";
	};

	$scope.subjects=[
         {subName:'A',marks:60},
         {subName:'B',marks:70},
         {subName:'C',marks:80},
         {subName:'D',marks:90},
         {subName:'E',marks:100}
      ];

});