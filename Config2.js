/** @format */

import Constants from './Constants'

export default {
  /**
   * There are so many choices from the marketplace mobile app, we thank you for choosing us and purchased the BeoNews products, please follow the step bellow to quickly set up your app
   * The detail document from: https://beonews.inspireui.com
   *

       drink: require('@images/category/cate1.jpg'),
    chicken: require('@images/category/cate2.jpg'),
    salads: require('@images/category/cate4.jpg'),
    smoothies: require('@images/category/cate5.jpg'),
    pasta: require('@images/category/cate6.jpg'),
    'health-care': require('@images/category/cate7.jpg'),
    'kids-menu': require('@images/category/cate8.jpg'),
    'quick-recipes': require('@images/category/cate9.jpg'),
    deserts: require('@images/category/cate10.jpg'),
    recipes: require('@images/category/cate11.jpg'),
    video: require('@images/category/cate12.jpg'),
    featured: require('@images/category/cate16.jpg'),

    
   * Step 1: Change your Wordpress site URL
   * Please make sure you have install all the Wordpress plugins - https://beonews.inspireui.com/step-2-installing-wordpress.html
   * On Mac OS, you need to create ~/Documents/FacebookSDK - https://beonews.inspireui.com/beonews-setup.html
   */
  URL: {
    root: 'https://abaservicesllc.com',
  },

  /**
   * Step 2: config image and default layout post
   * HorizonLayout: show the horizontal layout config, show as the default homepage
   *    - Tags: the tag ids from Wordpress blog, it could be set as array [x, x...]
   *    - Categories: the category ids, , it could be set as array [x, x...]
   *    - row: the number of row support on the list, default is one row
   *    - paging: blog per page from swiping, default is false
   *    - layout: support 8 kind of layouts: banner, twoColumn, threeColumn, threeColumnHigh, list, listRight, card, flexColumn
   *      (flexColumn is flexible column layout that you can config both width & height)
   * Banner: option to show the banner home page, default visible is true
   * AdvanceLayout: mix layout config for AdvanceMode: card, column, list, banner, twoColumn, threeColumn, listRight
   {
      name: 'Quick Recipes',
      categories: [36],
      paging: true,
      row: 3,
      layout: Constants.Layout.list,
    },
    {
      name: 'Favorites Salads',
      categories: [32],
      layout: Constants.Layout.column,
    },
    {
      name: 'Kids Menu',
      categories: [37],
      layout: Constants.Layout.flexColumn,
      width: 120,
      height: 250,
    },
    {
      name: 'Drinks',
      categories: [41],
      paging: true,
      row: 3,
      layout: Constants.Layout.listRight,
    },
    {
      name: 'Smoothies',
      categories: [33],
      paging: true,
      layout: Constants.Layout.card,
    },
   */
  //
  HorizonLayout: [
    { tags: [10], paging: true, layout: Constants.Layout.banner },
    {
      name: 'Services',
      categories: [7],
      layout: Constants.Layout.twoColumn,
    },
    {
      name: 'Tips',
      categories: [8],
      layout: Constants.Layout.twoColumn,
    },
    {
      name: 'Specials',
      categories: [9],
      layout: Constants.Layout.twoColumn,
    },
  ],
  Banner: {
    visible: true,
    sticky: true,
    tag: [],
    categories: [7],
  },
  // The advance layout
  AdvanceLayout: [
    Constants.Layout.threeColumn,
    Constants.Layout.threeColumn,
    Constants.Layout.threeColumn,
    Constants.Layout.list,
    Constants.Layout.list,
    Constants.Layout.list,
    Constants.Layout.list,
    Constants.Layout.card,
    Constants.Layout.column,
    Constants.Layout.column,
  ],

  /**
   * Step 3: Advance config
   * CategoryVideo: config the category id for video page
   * imageCategories: config image for categories
   **/
  // Category video id from the menu
  CategoryVideo: 34,

  imageCategories: {
    all: require('@images/category/cate14.jpg'),
  },

  // Custom page from left menu side
  CustomPages: {
    contact_id: 11,
    aboutus_id: 7,
  },

  // config for Firebase, use to sync user data across device and favorite post
  Firebase: {
    apiKey: 'AIzaSyAb5Q3inNuEyuQi63R4ir1vLH_OmghLs44',
    authDomain: 'aba-services-llc.firebaseio.com',
    databaseURL: 'aba-services-llc.firebaseio.com',
    storageBucket: 'aba-services-llc.appspot.com',
    messagingSenderId: '775003406777',
    readlaterTable: 'list_readlater',
  },

  // config for log in by Facebook
  Facebook: {
    showAds: false,
    adPlacementID: '',
    logInID: '1809822172592320',
    sizeAds: 'standard', // standard, large
  },

  // config for log in by Google
  // Google: {
  //   analyticId: 'UA-90561349-1',
  //   androidClientId:
  //     '338838704385-1om86241pq2qpg4qi677jb1ndo5jqfh2.apps.googleusercontent.com',
  //   iosClientId:
  //     '338838704385-1om86241pq2qpg4qi677jb1ndo5jqfh2.apps.googleusercontent.com',
  // },

  // config for log in by Admob
  AdMob: {
    visible: false,
    deviceID: 'pub-2101182411274198',
    unitID: 'ca-app-pub-2101182411274198/8802887662',
    unitInterstitial: 'ca-app-pub-2101182411274198/7326078867',
    isShowInterstital: false,
  },

  // tab animate
  tabBarAnimate: Constants.Animate.zoomIn,

  // config default for left menu
  LeftMenuStyle: Constants.LeftMenu.overlay,

  notification: {
    AppId: 'bdcb0d51-95c0-41de-a738-f10514959d7a',
    NewAppId: '88b0e176-5756-47b7-b061-aacea262421d',
  },

  // update 18 May
  // showLayoutButton: Ability to show/hide the switch layout button at homescreen
  // homeLayout: default homeLayout UI: Constants.Layout.mansory, Constants.Layout.horizontal
  // showSwitchCategory: show the switch button on categories page
  showLayoutButton: true,
  homeLayout: Constants.Layout.horizontal,
  showSwitchCategory: false,
}
