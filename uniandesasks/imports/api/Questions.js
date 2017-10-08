import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Questions = new Mongo.Collection("questions");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('questions', ()=>{
    return Questions.find();
  });
}

Meteor.methods({
	'questions.postQuestion'({
		title,
		postedat,
		theme,
		votes,
		answers,
		text,
		userId,
		poster
	}){
		Questions.insert({
			title:title,
			postedat:postedat,
			theme:theme,
			votes:votes,
			answers:answers,
			text:text,
			userId:userId,
			poster:poster
		});
	},
	'questions.vote'({id, vote}){
		var q = Questions.findOne(id);
		var votesToCast = ( vote === 'up' ) ? q.votes+1:q.votes-1;
		Questions.update(id, {
			$set: { votes: votesToCast },
		});
	},
	'questions.addAnswer'({id, answers}){
		Questions.update(
			id, {
			$push: answers
		});
	}
});
