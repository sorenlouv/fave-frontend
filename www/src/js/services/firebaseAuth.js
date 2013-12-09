app.factory('firebaseAuth', ['$q', 'safeApply', function($q, safeApply) {
  'use strict';

  // Init user ready deferred
  var userReadyDef = $q.defer();

  // Create firebase authentication object
  var usersRef = new Firebase("https://fave.firebaseio.com/users");
  var auth = new FirebaseSimpleLogin(usersRef, onAuthenticationChange.bind(this));

  /*
   * Attempt to login user
   * Return promise which will be resolved in "onAuthenticationChange" if login successful
   ****************************************/
  var login = function(accessToken){
    this.auth.login('facebook', {
      access_token: accessToken
    });

    return userReadyDef.promise;
  };

  // onChange: Authentication to Firebase
  var onAuthenticationChange = function(error, facebookUser) {
    if(facebookUser){
      this.createCurrentUser(facebookUser).then(function(){
        userReadyDef.resolve();
      });
    }
  };

  /*
   * Create user after successful login, if he doesn't exist
   ****************************************/
  var createCurrentUser = function(facebookUser){
    var createUserDef = $q.defer();
    var activeUserRef = usersRef.child(facebookUser.id);
    activeUserRef.once('value', function(activeUserSnapshot){

      // Create user if not exists
      if(activeUserSnapshot.val() === null){
        activeUserRef.set({
          id: facebookUser.id,
          name: facebookUser.name,
          first_name: facebookUser.first_name,
          last_name: facebookUser.last_name,
          email: facebookUser.email
        });
      }

      createUserDef.resolve();
    });

    return createUserDef.promise;
  };

  return login;
}]);