angular.module('kB')

.controller('CategoriesCtrl', ['$scope', '$http', ($scope, $http) => {
  $http.get('/categories').success(data => {
    $scope.categories = data;
  });
}]);
