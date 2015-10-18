// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    Ionic.io();

    var push = new Ionic.Push({
     "debug": true
   });

    var user = Ionic.User.current();
    if (!user.id) {
      user.id = Ionic.User.anonymousId();
    }
    user.set('firstName','Bij');
    user.set('lastName','Baj');
    var callback = function(data) {
      console.log('Registered token: ' + data.token);
      window.localStorage.setItem('token',data.token);
      push.addTokenToUser(user);
    }
    push.register(callback);
    var foo = window.localStorage.getItem('token');
    if(foo !== null){
    user.set('token',foo);}
    user.save();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.wishlist', {
      url: '/wishlist',
      views: {
        'tab-wishlist': {
          templateUrl: 'templates/tab-wishlist.html',
          controller: 'WishlistCtrl'
        }
      }
    })
    .state('tab.edit', {
      url: '/edit',
      views: {
        'tab-wishlist': {
          templateUrl: 'templates/edit-wishlist.html',
          controller: 'EditWishlistCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

window.onNotification = function(e) {
      console.log(processNotification(e.message));
          // this is the actual push notification. its format depends on the data model     from the push server
          console.log('message = '+e.message);
};
var processNotification = function(stir){
  return stir.replace('Check out new offers on ','').replace(' now!','');
}
