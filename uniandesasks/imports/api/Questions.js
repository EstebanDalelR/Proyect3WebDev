import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Questions = new Mongo.Collection("questions");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('questions', ()=>{
    return Questions.find();
  });
}
