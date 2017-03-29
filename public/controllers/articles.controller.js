angular.module('kB')

.controller('ArticlesCtrl', ['$scope', '$http', ($scope, $http) => {
	$http.get('/articles').success(data => {
		$scope.articles = data;
	});
}])

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', ($scope, $http, $routeParams) => {
	$http.get('/articles/category/' + $routeParams.category).success(data => {
		$scope.cat_articles = data;
		$scope.category = $routeParams.category;
	});
}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', ($scope, $http, $routeParams, $location) => {
	$http.get('/articles/' + $routeParams.id).success(data => {
		$scope.article = data;
	});

	$scope.removeArticle = () => {
		$http.delete('/article/' + $routeParams.id).success(data => {
			console.log(data);
		});

		$location.path('/articles');
	};
}])

.controller('ArticleCreateCtrl', ['$scope','$http', '$routeParams', '$location', ($scope, $http, $routeParams, $location) => {
	$http.get('/categories').success(data => {
		$scope.categories = data;
	});

	$scope.addArticle = () => {
		var data = {
			title: $scope.title,
			body: $scope.body,
			category: $scope.category
		}

		$http.post('/articles', data).success((data, status) => {
			console.log(status);
		});

		$location.path('/articles');
	}
}])

.controller('ArticleEditCtrl', ['$scope','$http', '$routeParams', '$location', ($scope, $http, $routeParams, $location) => {
	$http.get('/categories').success(data => {
		$scope.categories = data;
	});

	$http.get('/articles/' + $routeParams.id).success(data => {
		$scope.article = data;
	});

	$scope.updateArticle = () => {
		var data = {
			id:    		$routeParams.id,
			title:  	$scope.article.title,
			body: 		$scope.article.body,
			category: $scope.article.category
		}

		$http.put('/articles/' + $routeParams.id, data).success((data, status) => {
			console.log(status);
		});

		$location.path('/articles');
	}
}])
