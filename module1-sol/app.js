(function () {
    "use strict";
    
    angular.module("LunchCheck", [])
    
  .controller("lunchCtrl", lunchCtrl);
    
  lunchCtrl.$inject = ['$scope']
  
  function lunchCtrl ($scope) {
      
      $scope.meal = "";
      $scope.message = "Result";
      
    $scope.displayMessage  = function () {
        var mealWords = $scope.meal;
        mealWords = mealWords.trim().split(",");
        
        var count = 0;
        for (var i = 0; i < mealWords.length; i++) {
            //console.log(mealWords[i].length);
            if (!(mealWords[i].length === 0)) {
                count += 1;
                console.log(count);
            }
            console.log("count is " + count);
            if  ((count > 0) && (count <= 3)){
                $scope.message = "Enyoj"
            }
            else if (count > 3) {
                $scope.message="To much!!!"
            }
            else {
                $scope.message= "Error! Please input some dishes"
            }
        }
      // return $scope.message
    }  
  }
    
})();