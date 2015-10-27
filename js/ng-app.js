var app = angular.module("certiorem", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'templates/home.html',
          controller: 'mainCtrl'
      })
}]);

app.controller('mainCtrl',function($scope){
  $scope.info = {};
  $scope.show = '';

  $scope.alpha = function(){
    $scope.addFirstName = function(firstname){
      $scope.info.firstname = firstname;
      $scope.firstname = "";
    };
    $scope.addLastName = function(lastname){
      $scope.info.lastname = lastname;
      $scope.lastname = "";
    };
    $scope.addEmail = function(email){
        $scope.info.email = email;
        $scope.email = "";
    };
    $scope.addCourse = function(course){
      $scope.info.course = course;
      $scope.course = "";
    };
    $scope.setshow = function(){
      $scope.show = 'show';
    }
    $scope.showinfo = function(){
      var infoJSON = JSON.stringify($scope.info);
      console.log(infoJSON);
    };
    var re = /manhattan.edu$/i
    if($scope.email === undefined ||!re.test($scope.email)){
      alert("Please provide a valid manhattan email address");
    }else{
      $scope.addFirstName($scope.firstname);
      $scope.addLastName($scope.lastname);
      $scope.addEmail($scope.email);
      $scope.addCourse($scope.course);
      $scope.setshow();
      $scope.showinfo();
    }
  };
});
