import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
 
// Generate user initials after Facebook login
Accounts.onCreateUser((options, user) => {
  if (user.services.google) {
    user.name=user.services.google.name;
    user.email=user.services.google.email;
    user.picture=user.services.google.picture;
    user.isGoogle=true;
  }else{
    user.name=user.username;
    user.isGoogle=false;
  }
  user.questions = 0;
  user.answers = 0;
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    user.profile = options.profile;
  }
  console.log(user);
  // Don't forget to return the new user object at the end!
  return user;
});

Meteor.publish('user',
  function () {
    return Meteor.users.find(this.userId,
      {fields: {name: 1,email: 1,picture: 1,isGoogle: 1,questions: 1,answers: 1}});
  }
);