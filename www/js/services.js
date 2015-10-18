angular.module('starter.services', [])

.factory('Wishlist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data\
  var wishlist = [{
    id: 0,
    name: 'T-Shirts',
    selected: true,
    thumb: 'http://hydra-media.cursecdn.com/h1z1.gamepedia.com/6/69/Icon_Tshirt_BR_Black.png?version=5e6519d80393132d75b6979409027d11'
  }, {
    id: 1,
    name: 'Blouses',
    selected: false,
    thumb: 'http://images.beautifulhalo.com/images/128x128/201506/A/1433419162555.jpg'
  }, {
    id: 2,
    name: 'Polo Shirts',
    selected: false,
    thumb: 'http://thumbnail.image.rakuten.co.jp/@0_gold/auc-oshimaalta/gazou/1inbloom-003.jpg?_ex=128x128'
  }, {
    id: 3,
    name: 'Dress Shirts',
    selected: false,
    thumb: 'http://mccaulous.com/sc_images/products/1072_thumbnail_image.jpg'
  }, {
    id: 4,
    name: 'Sundresses',
    selected: false,
    thumb: 'http://images.beautifulhalo.com/images/128x128/201503/S/1426678140486.jpg'
  }, {
    id: 5,
    name: 'Evening Dresses',
    selected: false,
    thumb: 'http://d3piw3jndo3cpw.cloudfront.net/upimg/s128/1d/55/4cad71eb89d8174cfc58c2991e4a1d55.jpg'
  }, {
    id: 6,
    name: 'Jeans',
    selected: true,
    thumb: 'http://hydra-media.cursecdn.com/h1z1.gamepedia.com/9/9a/Skinny_Jeans.png?version=b76d54bcda0a0e9936d359014c00a755'
  }, {
    id: 7,
    name: 'Slacks',
    selected: false,
    thumb: 'http://static.yourpshome.net/image/cache/data/Rewards/The%20Casino/Blackjack/dress-pants-1846097085-128x128.png'
  }, {
    id: 8,
    name: 'Casual Shoes',
    selected: false,
    thumb: 'http://icons.iconarchive.com/icons/iconshock/80s/128/shoes-icon.png'
  }, {
    id: 9,
    name: 'Running Shoes',
    selected: false,
    thumb: 'http://cdn.outdoorgearlab.com/photos/12/80/249510_28340_S.jpg'
  }, {
    id: 10,
    name: 'Heels',
    selected: false,
    thumb: 'http://litbimg5.rightinthebox.com/images/m/201403/rvvbaa1395163390805.jpg'
  }, {
    id: 11,
    name: 'Work Boots',
    selected: false,
    thumb: 'https://33.media.tumblr.com/avatar_7b20c2cca5f2_128.png'
  }, {
    id: 12,
    name: 'Suits (F)',
    selected: false,
    thumb: 'http://litbimg.rightinthebox.com/images/m/201407/xjknlo1405647069201.jpg'
  }, {
    id: 13,
    name: 'Suits (M)',
    selected: false,
    thumb: 'https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/apps/assistant.png'
  }, {
    id: 14,
    name: 'Socks',
    selected: false,
    thumb: 'http://thumbnail.image.rakuten.co.jp/@0_mall/aspo/cabinet/ssk010/15fw/oss-ajp-m9868-e05507.jpg?_ex=128x128'
  }];

  return {
    all: function() {
      var foobar = window.localStorage.getItem('selections');
      if (foobar === null) {
        return wishlist;
      }
      var selections = JSON.parse(foobar);
      for (i = 0; i < wishlist.length; i+= 1){
        // console.log(wishlist[i]);
        wishlist[i].selected = selections[i];
      }
      return wishlist;
    },
    remove: function(chat) {
      wishlist.splice(wishlist.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (i = 0; i < wishlist.length; i+= 1) {
        if (wishlist[i].id === parseInt(chatId)) {
          return wishlist[i];
        }
      }
      return null;
    },
    toggle: function(chatId) {
      for (i = 0; i < wishlist.length; i+= 1) {
        if (wishlist[i].id === parseInt(chatId)) {
          wishlist[i].selected = !wishlist[i].selected;
          window.localStorage.setItem('selections',JSON.stringify(wishlist.map(function(item){return item.selected;})));
        }
      }
      return null;
    }
  };
})
.factory('Offers', function(){
  var offers = [
    {
      'itemName':'Limited Edition Boilermaker Shirt',
      'originalPrice':'70.00',
      'discountPrice':'42.00',
      'image':'https://news.uns.purdue.edu/images/2015/boiler-special.jpg',
      'dealEnds':'10/23/15',
      'stars':'5',
      'barcode':'img\\barcode.png',
      'class':'t-shirts',
      'store':'Custom Ink',
      'id':0
    },
    {
      'itemName':'Blue Blouse',
      'originalPrice':'49.99',
      'discountPrice':'29.99',
      'image':'http://www.nmwilliams.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/bl_903_2_blue_fly_front_ls_blouse_1_1.jpg',
      'dealEnds':'10/19/15',
      'stars':'3.5',
      'barcode':'img\\barcode.png',
      'class':'blouses',
      'store':'Macy\'s',
      'id':1
    },
    {
      'itemName':'Raptor Polo',
      'originalPrice':'69.99',
      'discountPrice':'59.99',
      'image':'http://cdn.shopify.com/s/files/1/0149/3544/products/raptor_polo_5_1024x1024.jpg?v=1417629395',
      'dealEnds':'10/21/15',
      'stars':'3',
      'barcode':'img\\barcode.png',
      'class':'polo shirts',
      'store':'xkcd',
      'id':2
    },
    {
      'itemName':'Golden Dress shirt',
      'originalPrice':'999.99',
      'discountPrice':'974.99',
      'image':'http://ep.yimg.com/ay/yhst-75122687164419/mens-elegant-shiny-gold-satin-formal-dress-shirt-tie-hanky-daniel-ellissa-brand-5.gif',
      'dealEnds':'10/22/15',
      'stars':'2',
      'barcode':'img\\barcode.png',
      'class':'dress shirts',
      'store':'Nader Fashion',
      'id':3
    },
    {
      'itemName':'Dr. Who Sundress',
      'originalPrice':'59.99',
      'discountPrice':'39.99',
      'image':'https://s-media-cache-ak0.pinimg.com/originals/22/d4/0b/22d40b488b16062e5501f20e64092b8f.jpg',
      'dealEnds':'10/22/15',
      'stars':'4.5',
      'barcode':'img\\barcode.png',
      'class':'sundresses',
      'store':'Etsy',
      'id':4
    },
    {
      'itemName':'Black Evening Gown',
      'originalPrice':'119.99',
      'discountPrice':'99.99',
      'image':'http://static.merpherl.com/media/catalog/product/cache/1/image/01e0bdf8ea7e3dd64bfbc5ab0fbb943c/A/T/AT0638_1.jpg',
      'dealEnds':'10/22/15',
      'stars':'4',
      'barcode':'img\\barcode.png',
      'class':'evening dresses',
      'store':'Lily Pulitzer',
      'id':5
    },
    {
      'itemName':'Mint Scratch \'n Sniff Skinny Jeans',
      'originalPrice':'79.99',
      'discountPrice':'69.99',
      'image':'https://cdn.shopify.com/s/files/1/0322/0537/products/top_folded_4d796733-b981-40b3-afad-874ea7f39b27_1024x1024.jpg?v=1391279958',
      'dealEnds':'10/20/15',
      'stars':'4.5',
      'barcode':'img\\barcode.png',
      'class':'jeans',
      'store':'Tate + Yoko',
      'id':6
    },
    {
      'itemName':'Slacks',
      'originalPrice':'99.99',
      'discountPrice':'69.99',
      'image':'http://8ninths.com/wp-content/uploads/2015/05/Slack-Colour-RGB.png',
      'dealEnds':'10/20/15',
      'stars':'4.5',
      'barcode':'img\\barcode.png',
      'class':'slacks',
      'store':'The Internet',
      'id':7
    },
    {
      'itemName':'Classic Converse',
      'originalPrice':'89.99',
      'discountPrice':'29.99',
      'image':'http://images6.fanpop.com/image/photos/33700000/converse-converse-33758775-1500-1234.jpg',
      'dealEnds':'10/23/15',
      'stars':'4',
      'barcode':'img\\barcode.png',
      'class':'shoes',
      'store':'American Apparel',
      'id':8
    },
    {
      'itemName':'Moon Shoes',
      'originalPrice':'199.99',
      'discountPrice':'69.99',
      'image':'http://ecx.images-amazon.com/images/I/81xe2issPZL._SL1500_.jpg',
      'dealEnds':'10/21/15',
      'stars':'1.5',
      'barcode':'img\\barcode.png',
      'class':'running shoes',
      'store':'Amazon',
      'id':9
    },
    {
      'itemName':'Spiked Heels',
      'originalPrice':'99.99',
      'discountPrice':'79.99',
      'image':'https://img0.etsystatic.com/000/0/6216654/il_fullxfull.274186712.jpg',
      'dealEnds':'10/20/15',
      'stars':'5',
      'barcode':'img\\barcode.png',
      'class':'heels',
      'store':'Zappos Brick + Mortar',
      'id':10
    },
    {
      'itemName':'Steel-Toed Combat Boots',
      'originalPrice':'109.99',
      'discountPrice':'99.99',
      'image':'http://image.sportsmansguide.com/adimgs/l/9/96825m2_ts.jpg',
      'dealEnds':'10/20/15',
      'stars':'4',
      'barcode':'img\\barcode.png',
      'class':'work shoes',
      'store':'\'Murica Surplus',
      'id':11
    },
    {
      'itemName':'Business Suit',
      'originalPrice':'99.99',
      'discountPrice':'98.99',
      'image':'http://www.pinstripeandpearls.com/wp-content/uploads/Catherine-Navy-Blue-Skirt-Suit-by-Nooshin-Main.jpg',
      'dealEnds':'10/19/15',
      'stars':'4.5',
      'barcode':'img\\barcode.png',
      'class':'women\'s suits',
      'store':'Meyers & Briggs',
      'id':12
    },
    {
      'itemName':'Galaxy Print Blazer',
      'originalPrice':'69.99',
      'discountPrice':'42.42',
      'image':'https://img1.etsystatic.com/000/0/5542530/il_fullxfull.350328281.jpg',
      'dealEnds':'04/20/69',
      'stars':'5',
      'barcode':'img\\barcode.png',
      'class':'men\'s suits',
      'store':'Good Will',
      'id':13
    },
    {
      'itemName':'Woolen Cabin Socks',
      'originalPrice':'19.99',
      'discountPrice':'9.99',
      'image':'https://asset3.surfcdn.com/seasalt-socks-seasalt-cabin-socks-porthole-squid-ink.jpg?w=1200&h=1200&q=80&o=br6HF$ytlp7tH8uu$vPH647xrcgj&V=WPM6',
      'dealEnds':'12/25/15',
      'stars':'5',
      'barcode':'img\\barcode.png',
      'class':'socks',
      'store':'SmartWool',
      'id':14
    },
  ];

  return {
    all: function(){
      return offers
    },
    get: function(k){return offers[k];},
    byClass: function(clas){
      for(var i = 0; i < offers.length; i++){
        if(offers[i].class.replace(' ','').replace('\'','').toLowerCase() === clas.replace(' ','').replace('\'','').toLowerCase()){return offers[i];}
      }
    },
  };
});
