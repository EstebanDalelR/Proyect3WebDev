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
					<img className="pic" src={this.props.userServices.picture} alt=""/>
					<p className="email">{this.props.userServices.email}</p>
				</div>
			);
	}

	render(){
		return(
			<div className="sideBar">
				<div className="profile">
					<h3>{(this.props.currentUser)?this.props.currentUser.name:''}</h3>
					{(this.props.userServices)?this.renderServices():''}
				</div>
				<NavButtons></NavButtons>
			</div>
		);
	}

}

export default StaticSideBar;