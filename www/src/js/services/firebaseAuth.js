app.factory('firebaseAuth', ['$q', 'safeApply', function($q, safeApply) {
  'use strict';

  // Init user ready deferred
  var userReadyDef = $q.defer();

  // Create firebase authentication object
  var firebaseAuth = {
    userReady: userReadyDef.promise,

    login: function(accessToken){
      this.usersRef = new Firebase("https://fave.firebaseio.com/users");
      this.auth = new FirebaseSimpleLogin(this.usersRef, this.onAuthenticationChange.bind(this));

      this.auth.login('facebook', {
        access_token: accessToken
      });
    },

    getOrCreateCurrentUser: function(facebookUser){
      var deferred = $q.defer();
      var activeUserRef = firebaseAuth.usersRef.child(facebookUser.id);
      activeUserRef.once('value', function(activeUserSnapshot){

        // Create user if not exists, or fetch from DB
        var activeUser;
        if(activeUserSnapshot.val() === null){
          // user does not exist
          activeUser = {
            id: facebookUser.id,
            name: facebookUser.name,
            first_name: facebookUser.first_name,
            last_name: facebookUser.last_name,
            email: facebookUser.email
          };
          activeUserRef.set(activeUser);
        }else{
          // user already exists
          activeUser = activeUserSnapshot.val();
        }

        deferred.resolve(activeUser);
      });

      return deferred.promise;
    },

    onAuthenticationChange: function(error, facebookUser) {
      if(error){
        // auth error
        console.log("Authentication error", error);
        this.userReadyDef.reject(error);

      }else if(facebookUser){
        // user signed in with Facebook
        console.log("User signed in!");
        this.getOrCreateCurrentUser(facebookUser).then(function(activeUser){
          userReadyDef.resolve(activeUser);
        });

      }else{
        // user signed out
        // userReadyDef.reject("User signed out");
      }
    }
  };

  return firebaseAuth;
}]);