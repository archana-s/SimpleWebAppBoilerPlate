define([
  'backbone',
  'communicator',
  'jquery',
  'appRouter'
],

  function( Backbone, Communicator, $, AppRouter) {
    'use strict';

    window.TemplateApp = new Backbone.Marionette.Application();

    TemplateApp.addInitializer( function () {
      Communicator.mediator.trigger("APP:START");
      TemplateApp.appRouter = new AppRouter();
    });

    TemplateApp.on("initialize:after", function(){
      Backbone.history.start({pushState: true});
    });
    return TemplateApp;
  });
