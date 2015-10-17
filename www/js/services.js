angular.module('starter.services', [])

.factory('Wishlist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var wishlist = [{
    id: 0,
    name: 'T-Shirts',
    selected: 'false',
    thumb: 'http://hydra-media.cursecdn.com/h1z1.gamepedia.com/6/69/Icon_Tshirt_BR_Black.png?version=5e6519d80393132d75b6979409027d11'
  }, {
    id: 1,
    name: 'Blouses',
    selected: 'true',
    thumb: 'http://images.beautifulhalo.com/images/128x128/201506/A/1433419162555.jpg'
  }, {
    id: 2,
    name: 'Polo Shirts',
    selected: 'false',
    thumb: 'http://thumbnail.image.rakuten.co.jp/@0_gold/auc-oshimaalta/gazou/1inbloom-003.jpg?_ex=128x128'
  }, {
    id: 3,
    name: 'Dress Shirts',
    selected: 'false',
    thumb: 'http://mccaulous.com/sc_images/products/1072_thumbnail_image.jpg'
  }, {
    id: 4,
    name: 'Sundresses',
    selected: 'false',
    thumb: 'http://images.beautifulhalo.com/images/128x128/201503/S/1426678140486.jpg'
  }, {
    id: 5,
    name: 'Evening Dresses',
    selected: 'false',
    thumb: 'http://d3piw3jndo3cpw.cloudfront.net/upimg/s128/1d/55/4cad71eb89d8174cfc58c2991e4a1d55.jpg'
  }, {
    id: 6,
    name: 'Jeans',
    selected: 'false',
    thumb: 'http://hydra-media.cursecdn.com/h1z1.gamepedia.com/9/9a/Skinny_Jeans.png?version=b76d54bcda0a0e9936d359014c00a755'
  }, {
    id: 7,
    name: 'Slacks',
    selected: 'false',
    thumb: 'http://static.yourpshome.net/image/cache/data/Rewards/The%20Casino/Blackjack/dress-pants-1846097085-128x128.png'
  }, {
    id: 8,
    name: 'Casual Shoes',
    selected: 'false',
    thumb: 'http://icons.iconarchive.com/icons/iconshock/80s/128/shoes-icon.png'
  }, {
    id: 9,
    name: 'Heels',
    selected: 'false',
    thumb: 'http://cdn.outdoorgearlab.com/photos/12/80/249510_28340_S.jpg'
  }, {
    id: 10,
    name: 'Running Shoes',
    selected: 'false',
    thumb: 'http://litbimg5.rightinthebox.com/images/m/201403/rvvbaa1395163390805.jpg'
  }, {
    id: 11,
    name: 'Work Boots',
    selected: 'false',
    thumb: 'https://33.media.tumblr.com/avatar_7b20c2cca5f2_128.png'
  }, {
    id: 12,
    name: 'Suits (F)',
    selected: 'false',
    thumb: 'http://litbimg.rightinthebox.com/images/m/201407/xjknlo1405647069201.jpg'
  }, {
    id: 13,
    name: 'Suits (M)',
    selected: 'false',
    thumb: 'https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/apps/assistant.png'
  }, {
    id: 14,
    name: 'Ankle Socks',
    selected: 'false',
    thumb: 'http://thumbnail.image.rakuten.co.jp/@0_mall/aspo/cabinet/ssk010/15fw/oss-ajp-m9868-e05507.jpg?_ex=128x128'
  }, {
    id: 15,
    name: 'No-Show Socks',
    selected: 'false',
    thumb: 'http://var.pumart.net/nikegolf-mens-dri-fit-performance-no-show-sock-9-11_small.jpg'
  }];

  return {
    all: function() {
      return wishlist;
    },
    remove: function(chat) {
      wishlist.splice(wishlist.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id === parseInt(chatId)) {
          return wishlist[i];
        }
      }
      return null;
    },
    toggle: function(chatId) {
      for (var i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id === parseInt(chatId)) {
          wishlist[i].selected = !wishlist[i].selected;
        }
      }
      return null;
    },
  };
});
