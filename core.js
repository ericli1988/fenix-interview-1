var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope) {
   $scope.AccountNumber = "";
   $scope.PaymentReference = "";
   $scope.PaymentDate = "";
   $scope.PaymentAmount = "";
});
