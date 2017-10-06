import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';

import './css/App.css';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<NavBar></NavBar>
					<StaticSideBar currentUser={this.props.currentUser} userServices={this.props.userServices}></StaticSideBar>
					<div className="container top40 main">
						<QuestionList></QuestionList>
					</div>
				</div>
			);
	}
}


export default AppContainer = createContainer((props) => {
	console.log(Meteor.user());
	return {
		_id: Meteor.userId(),
		currentUser: (Meteor.user())?Meteor.user():{},
	};
}, App);

