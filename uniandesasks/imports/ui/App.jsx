import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import 'bootstrap';



import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';
import {Questions} from '../../imports/api/Questions.js';


import './css/App.css';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<NavBar/>
					<StaticSideBar currentUser={this.props.currentUser} userServices={this.props.userServices}/>

					<div className="container top40 main">

						<QuestionList/>

					</div>
				</div>
			);
	}
}


export default AppContainer = createContainer((props) => {
	return {
		_id: Meteor.userId(),
		currentUser: (Meteor.user())?((Meteor.user().profile)?Meteor.user().profile:{name:Meteor.user().username}):{},
		userServices: (Meteor.user())?Meteor.user().services.google:{},
	};
}, App);
