
RusticComforts.controller("productController", function($scope, productFactory){

		$scope.products;

		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}

		$scope.newListing = {};

		$scope.addProduct = function(newListing) {
			newListing.image = 'default-01';
			$scope.products.push(newListing);
			$scope.newListing = {};
		}
// putting the getProduct data on scope and logging an error if there is one
		productFactory.getProduct().success(function(data) {
			$scope.products = data;
		}).error(function(error) {
			// console.log(error);
		});

	});	