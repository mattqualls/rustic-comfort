
       
RusticComforts.factory("productFactory", function($http){


// 	making the http request
		function getProduct(){
			return $http.get('products.json');
		}

		return {
			getProduct: getProduct
		}
	});