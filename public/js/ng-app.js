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
      
    var re = /manhattan.edu$/i
    if($scope.email === undefined ||!re.test($scope.email)){
      alert("Please provide a valid manhattan email address");
    }else{
      $scope.info.firstname = $scope.firstname;
      $scope.firstname = "";
    
      $scope.info.lastname = $scope.lastname;
      $scope.lastname = "";
    
      $scope.info.email = $scope.email;
      $scope.email = "";

      $scope.info.course = $scope.course;
      $scope.course = "";
   
      $scope.show = 'show';
   
      var infoJSON = JSON.stringify($scope.info);
      console.log(infoJSON);
      
    }
  };
});
