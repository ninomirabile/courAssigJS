
(function(){
  'use strict';

angular.module('LunchCheck', [ ])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

$scope.dishes="";
$scope.message ="";
$scope.styles={};


$scope.checkDishes = function (){
  if( $scope.dishes==""){
    $scope.message ="Please enter data first";
    $scope.styles ="red";
   }
  else{
    var arrIn = $scope.dishes.split(',');
      $scope.styles = "green";
      if(arrIn.length<=3){
      $scope.message ="Enjoy!";
      }
      else{
        $scope.message="Too Much!";
       }
      }
   };
  }

})();
