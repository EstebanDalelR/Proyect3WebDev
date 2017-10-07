import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

	returnHome(){
		this.props.returnHome();
	}

	render(){
		return(
			<div className="sideBar">
				<div className="profile">
					<h3>{(this.props.currentUser)?this.props.currentUser.name:''}</h3>
					{(this.props.currentUser.isGoogle)?this.renderServices():''}
					<p>{(this.props.currentUser.questions !== undefined)?'#Preguntas: '+this.props.currentUser.questions:''}</p>
					<p>{(this.props.currentUser.answers !== undefined)?'#Respuestas: '+this.props.currentUser.answers:''}</p>
				</div>
				<NavButtons returnHome={this.returnHome.bind(this)}></NavButtons>
			</div>
		);
	}

}

StaticSideBar.PropTypes={
	returnHome: PropTypes.func.isRequired
}

export default StaticSideBar;