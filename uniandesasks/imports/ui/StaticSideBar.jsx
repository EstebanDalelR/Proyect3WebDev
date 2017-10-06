import React, {Component} from 'react';

import NavButtons from './NavButtons.jsx';

import './css/StaticSideBar.css';

class StaticSideBar extends Component{
	constructor(props){
		super(props);
	}

	renderServices(){
		return(
				<div>
					<img className="pic" src={this.props.currentUser.picture} alt=""/>
					<p className="email">{this.props.currentUser.email}</p>
				</div>
			);
	}

	render(){
		return(
			<div className="sideBar">
				<div className="profile">
					<h3>{(this.props.currentUser)?this.props.currentUser.name:''}</h3>
					{(this.props.currentUser.isGoogle)?this.renderServices():''}
					<p>{'#Preguntas: '+this.props.currentUser.questions}</p>
					<p>{'#Respuestas: '+this.props.currentUser.answers}</p>
				</div>
				<NavButtons></NavButtons>
			</div>
		);
	}

}

export default StaticSideBar;