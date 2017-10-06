import React, {Component} from 'react';

import SearchBox from './SearchBox.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import './css/NavBar.css';

class NavBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="navBar">
				<div className="logo col-md-4">
					<img src="../img/logo.png" alt="SenecAsks logo"/>
				</div>
				<div className="searchbox col-md-6">
					<SearchBox></SearchBox>	
				</div>
				<div className="signinbutton col-md-2">
					<AccountsUIWrapper/>
				</div>
			</div>
		);
	}

}

export default NavBar;