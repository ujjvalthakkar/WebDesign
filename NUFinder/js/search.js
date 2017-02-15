

		// Configuring Firebase DB
		var config = {
			apiKey: "AIzaSyBbaKF-ijGLlCvMJOuF2iUHtSv7B80r8N4",
			authDomain: "contactlist-2392c.firebaseapp.com",
			databaseURL: "https://contactlist-2392c.firebaseio.com",
			storageBucket: "contactlist-2392c.appspot.com",
			messagingSenderId: "74462320695"
		};
		firebase.initializeApp(config);

		angular.module('myApp', ['firebase'])
		.controller('searchFormController', ['$scope','$firebaseArray', '$timeout',function($scope, $firebaseArray, $timeout) {

			//Jquery Actiion used to assign the dynamic value!!
			$(".datepicker").on("change", function() {
				$scope.selecteddate = $(".datepicker").val();	
			});

			// Start of firebase
			$scope.loggedInUserUID='';

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					// User is signed in.
					console.log('onAuthStateChanged --> User UID is: '+user.uid);
					$timeout(function(){
						$scope.loggedInUserUID = user.uid;
						console.log('loggedInUserUID in onAuthStateChanged: '+ $scope.loggedInUserUID);
					},1);
				} else {
		   				// No user is signed in.
		   				console.log('onAuthStateChanged --> UID in Null user is: '+user);
		   				$timeout(function(){
		   					$scope.loggedInUserUID = user;
		   				},1);
		   			}
		   		});
			// Takes firebase DB reference
			var rootRef = firebase.database().ref();
			$scope.data=$firebaseArray(rootRef);

			// Retreival
			$scope.lostItems='';
			
			firebase.database().ref('/items/').once('value').then(function(snapshot) {
				$scope.lostItems=JSON.stringify(snapshot.val());
				$scope.childKey = snapshot.child("items/");
				var s=JSON.parse($scope.lostItems);
				$scope.itemKeys=Object.values(s);
			});

			$scope.categorySearched='';
			$scope.whatSearched='';
			$scope.whereSearched='';
			$scope.whenSearched='';

			$scope.retrieveSearchItems = function() {
				$scope.categorySearched=$scope.itemCategory;
				$scope.whatSearched=$scope.what;
				$scope.whereSearched=$scope.where;
				$scope.whenSearched=$scope.when;
			};


			$(document).ready(function(){
				$(".datepicker").datepicker({
					format: "mm/dd/yyyy",
					autoclose: true, 
					todayHighlight: true
				});

				$("#submitBtn").click(function(){
					$scope.retrieveSearchItems();
					$("#searchModal").modal();
				});
			});
		}]);