angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, Offers) {

  var foobar = window.localStorage.getItem('offer');
  if (foobar === null) {
    $scope.offer = Offers.byClass('t-shirts');
  }
  else{
    $scope.offer = Offers.byClass(window.localStorage.getItem('offer'));
  }


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
  $scope.$on('$ionicView.enter', function(e) {
        $scope.wishlist = Wishlist.all();
    });
  $scope.remove = function(chat) {
    Wishlist.remove(chat);
  };
})

.controller('EditWishlistCtrl', function($scope, Wishlist) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.toggle = function(item){
    Wishlist.toggle(item.id);
  };

  $scope.toggleIcon = function($event, iconName, item) {
    var buttonClasses = $event.currentTarget.className;
    if (buttonClasses.indexOf(iconName + '-outline') > 0) {
      buttonClasses = buttonClasses.replace('-outline', '-filled');
    } else {
      buttonClasses = buttonClasses.replace(iconName + '-filled', iconName + '-outline');
    }
    $event.currentTarget.className = buttonClasses;
    $scope.toggle(item);
  };

  $scope.data = {
    'selected':false
  };

  $scope.wishlist = Wishlist.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Wishlist) {
  $scope.chat = Wishlist.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  var user = Ionic.User.current();
  $scope.fullName = user.get('firstName') + " " + user.get('lastName');
  // $scope.fullName = "Bij Baj";
  $scope.settings = {
    enableFriends: true
  };
});
