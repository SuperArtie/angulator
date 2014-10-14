(function(){
  'use strict';

  angular.module('angulator', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.display = '0';
    $scope.answer = function(){
      $scope.display = parseFloat($scope.display);
      $scope.memory  = parseFloat($scope.memory);
      if($scope.operator === '+'){
        $scope.display = ($scope.display + $scope.memory).toString();
        $scope.clearDisplay();
      }else($scope.operator === '-'){
        $scope.display = ($scope.display - $scope.memory).toString();
        $scope.clearDisplay();
      }
    };
    $scope.clearDisplay = function(){
      $scope.memory   = '';
      $scope.operator = '';
    };
    $scope.beverlyCleary= function(){
      $scope.display  = '0';
      $scope.memory   = '';
      $scope.operator = '';
    };
    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory   = $scope.display;
      $scope.display  = '0';
    };
    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}
      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };
  }]);
})();

