/* global cordova */

var phonegap = {
  // Application Constructor
  initialize: function() {
    'use strict';

    this.bindEvents();
  },

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    'use strict';

    var isCordova = (typeof cordova !== 'undefined' && cordova.version !== undefined);
    if (isCordova) {
      console.log('Phonegap mode: waiting for device ready signal');
      document.addEventListener('deviceready', this.bootstrapAngular.bind(this), false);
    } else {
      this.bootstrapAngular();
    }
  },

  angularIsReady: function(callback){
    'use strict';

    this.checkForAngularInternval = window.setInterval(function(){
      if(typeof angular !== 'undefined'){
        window.clearInterval(phonegap.checkForAngularInternval);
        callback();
      }
    }, 50);
  },

  // deviceready Event Handler
  bootstrapAngular: function() {
    'use strict';
    this.angularIsReady(function(){
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['faveapp']);
      });
    });
  }
};

// initialize phonegap
phonegap.initialize();