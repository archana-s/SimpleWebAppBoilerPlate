require(['./config'],function(){
  require([
    'backbone',
    'app'
  ],
    function (Backbone, App ) {
      'use strict';
       App.start();
    });
});