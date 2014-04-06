/**
 *  Todo: add a description
 */
define([
  'backbone',
  'jquery',
  'underscore',
  'communicator'
  ],

  function( Backbone, $, _, Communicator) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
      ui: {
        'testSection1': '.test-section-1',
        'testSection2': '.test-section-2',
        'readme': '.readme',
        'eventTriggerBtn': '.eventTrigger'
      },

      events : {
        'click .readme': 'openReadme',
        'click .eventTrigger': 'triggerSomeEvent'
      },

      initialize: function(options) {
        this.el = options.el;
        _.bindAll(this,
          'render',
          'openReadme',
          'bindEvents',
          'triggerSomeEvent',
          'callMe',
          'close'
        );

        this.bindEvents();
      },

      render: function() {
        $(this.ui.testSection1).append("Whip up a quick little app with all the basics in place");
        $(this.ui.testSection2).append("Fear not. Its simple!");
      },

      openReadme: function() {
        window.location = "https://github.com/archana-s/SimpleWebAppBoilerPlate/blob/master/README.md";
      },

      triggerSomeEvent: function() {
        Communicator.mediator.trigger("RandomTrigger:eventTriggered");
      },

      bindEvents: function() {
        /*
          Add bind events for ui elements added after the view is loaded.
        */
        Communicator.mediator.bind("RandomTrigger:eventTriggered", this.callMe);
      },

      callMe: function() {
        alert("Event triggered through Communicator. Use it across views and controllers");
      },

      close: function() {
        /*
          Invoke this method to clean up and unbind events
        */
        Communicator.mediator.unbind("RandomTrigger:eventTriggered");
      }

    });

  });
