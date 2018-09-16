
var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "Khushboo";
    $scope.lastName = "Goel";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

app.controller('calc', function($scope) {
    $scope.res_So_Far = 0;
    $scope.old_value = 0;
    $scope.operation = "";
    $scope.new_value = 0;

    $scope.calculate = function() {
        $scope.old_value = $scope.res_So_Far;
        if($scope.operation == '+'){
            $scope.res_So_Far = $scope.res_So_Far+$scope.new_value;
        }
        if($scope.operation == '-'){
            $scope.res_So_Far = $scope.res_So_Far-$scope.new_value;
        }
        if($scope.operation == '*'){
            $scope.res_So_Far = $scope.res_So_Far*$scope.new_value;
        }
        if($scope.operation == '/'){
            $scope.res_So_Far = $scope.res_So_Far/$scope.new_value;
        }
        if($scope.operation == '%'){
            $scope.res_So_Far = $scope.res_So_Far%$scope.new_value;
        }
        if($scope.operation == ""){
            $scope.res_So_Far = $scope.new_value;
        }
        $scope.operation = "";
        $scope.new_value = 0;
    }
});