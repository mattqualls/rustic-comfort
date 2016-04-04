
       
RusticComforts.factory("productFactory", function($http){


// 	making the http request
		function getProduct(){
			return $http.get('products.json');
		}
    //  "https://rustic-comforts.firebaseio.com/.json"

		return {
			getProduct: getProduct
		}
	});