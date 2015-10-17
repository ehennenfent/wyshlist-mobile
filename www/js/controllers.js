angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup) {
  $scope.offer = {
    'itemName':'Mint Scratch \'n Sniff Skinny Jeans',
    'originalPrice':'79.99',
    'discountPrice':'69.99',
    'image':'https://cdn.shopify.com/s/files/1/0322/0537/products/top_folded_4d796733-b981-40b3-afad-874ea7f39b27_1024x1024.jpg?v=1391279958',
    'dealEnds':'10/20/15',
    'stars':'4.5',
    'barcode':'img\\barcode.png',
    'type':'pants',
    'subtype':'jeans'
  };

  $scope.showAlert = function(barc0de) {
   var alertPopup = $ionicPopup.alert({
     title: 'Thanks!',
     template: '<p>Please show this bar code to any sales representative.</p><p><img ng-src="' + barc0de + '"></img></p>'
   });
   alertPopup.then(function(res) {
     ;
   });
 };
})

.controller('WishlistCtrl', function($scope, Wishlist) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.wishlist = Wishlist.all();
  $scope.remove = function(chat) {
    Wishlist.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Wishlist) {
  $scope.chat = Wishlist.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
