angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    
    $scope.addListing = function() 
    {
    
    	$scope.listings.push({
    		code: $scope.newlist.code,
    		name: $scope.newlist.name,
    		coordinates:
   				{
   				
    				latitude: $scope.newlist.latitude,
    			
    				longitude: $scope.newlist.longitude
   				},
    		address: $scope.newlist.address
    
    });
    };
    $scope.deleteListing = function(index) 
    {
    var removedlist = $scope.listings.indexOf(index);
    $scope.listings.splice(removedlist, 1);
    
    };
    $scope.showDetails = function(index) 
    {
    var showlist = $scope.listings.indexOf(index);
    $scope.detailedInfo = $scope.listings[showlist];
    };
  }
]);