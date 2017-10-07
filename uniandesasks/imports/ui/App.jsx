import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';
import QuestionAnswers from './QuestionAnswers.jsx';

import './css/App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {questionSelected: ' '};
	}

	returnHome(){
		this.setState(()=>{return{questionSelected:' '}});
		console.log('return home');
	}

	selectQuestion(quest){
		this.setState(()=>{return{questionSelected:quest}});
		console.log('something selected');
		console.log(quest);
	}

	render(){
		return(
				<div>
					<NavBar></NavBar>
					<StaticSideBar currentUser={this.props.currentUser} returnHome={this.returnHome.bind(this)}></StaticSideBar>
					<div className="container top40 main">
						{(this.state.questionSelected === ' ')?<QuestionList selectQuestion={this.selectQuestion.bind(this)}></QuestionList>:<QuestionAnswers questionSelected={this.state.questionSelected}></QuestionAnswers>}
					</div>
				</div>
			);
	}
}

export default AppContainer = createContainer((props) => {
	if(Meteor.user()){
    	Meteor.subscribe('user');
	}
	return {
		_id: Meteor.userId(),
		currentUser: (Meteor.user())?Meteor.user():{},
	};
}, App);

