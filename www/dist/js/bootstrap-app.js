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

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
      document.addEventListener('deviceready', this.bootstrapAngular.bind(this), false);
    } else {
      this.bootstrapAngular();
    }
  },

  loadJS: function(src, callback) {
    'use strict';
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function() {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
  },

  // deviceready Event Handler
  bootstrapAngular: function() {
    'use strict';

    this.loadJS('src/vendors/1.angular.min.js', function(){
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['faveapp']);
      });
    });
  }
};

// initialize phonegap
phonegap.initialize();