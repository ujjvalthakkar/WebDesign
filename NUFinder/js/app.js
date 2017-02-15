var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstname;
  };

}]);
 

    var tour = new Tour({name: "sanket",
  steps: [
  {
    element: "#step-one",
    placement: "auto",
    title: "Welcome to our landing page!",
    content: "This tour will guide you through some of the features we'd like to point out.",
  },
  {
    element: "#step-two",
    placement: "auto",
    title: "Step 2",
    content: "Boom, bang, bam!"
  },
  {
    element: "#step-three",
    placement: "auto",
    title: "Welcome to last page!",
    content: "Content 3"
   }
  ]
  // storage: false
  // backdrop: true

});


      tour.init();
      tour.setCurrentStep(0);

tour.start();