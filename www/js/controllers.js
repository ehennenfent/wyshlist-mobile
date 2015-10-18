angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, Offers, $rootScope) {

  $scope.$on('$ionicView.enter', function(e) {
    var foobar = window.localStorage.getItem('offer');
    if (foobar === null) {
      $scope.offer = Offers.byClass('t-shirts');
      window.localStorage.setItem('offer','t-shirts');
    }
    else{
      $scope.offer = Offers.byClass(window.localStorage.getItem('offer'));
    }
    });

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

.controller('EditWishlistCtrl', function($scope, Wishlist, Offers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.toggle = function(item){
    Wishlist.toggle(item.id);
    var off = Offers.get(item.id);
    if (window.localStorage.getItem('offer') === off.class){
      if(!item.selected){
        for (i = 0; i < 15; i += 1){
          if(Wishlist.get(i).selected){
            window.localStorage.setItem('offer',Offers.get(i).class)
          }
        }
      }
    }
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

.controller('AccountCtrl', function($scope, $rootScope) {
  var user = Ionic.User.current();
  $scope.fullName = user.get('firstName') + " " + user.get('lastName');
  $scope.token = user.get('token');
  $scope.debug = [];

  var delegate = new cordova.plugins.locationManager.Delegate();

  delegate.didDetermineStateForRegion = function (pluginResult) {

    $scope.debug.push('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
    console.log('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

    cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
        + JSON.stringify(pluginResult));
};

delegate.didStartMonitoringForRegion = function (pluginResult) {
    $scope.debug.push('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
    console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
};

delegate.didRangeBeaconsInRegion = function (pluginResult) {
    console.log("BEACONS: " + JSON.stringify(pluginResult.beacons));
    if(pluginResult.beacons.length > 0){
      var foo = window.localStorage.getItem('foundBeacon');
      if(foo === null){window.localStorage.setItem('foundBeacon',true);foo = true; return;}
      if(!foo){window.localStorage.setItem('foundBeacon', false);}
      console.log("Dude Sick we found the beacon!");

    }
    else{
      
    }
    // $scope.debug.push('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
    // console.log('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
};

var uuid = 'B0702880-A295-A8AB-F734-031A98A512DE';
var identifier = 'JPsMacbook';
var minor = 420;
var major = 69;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate);

// required in iOS 8+
cordova.plugins.locationManager.requestWhenInUseAuthorization();
// or cordova.plugins.locationManager.requestAlwaysAuthorization()

// cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(function(){console.log("XXXXXXXXXXERROR!!!!!!!XXXXXXXXXX");})
    .done(function(){console.log("XXXXXXXXXXSUCCESS!!!!!XXXXXXXXXX");});

});
