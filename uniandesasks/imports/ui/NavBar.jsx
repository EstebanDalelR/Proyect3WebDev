import React, {Component} from 'react';

import SearchBox from './SearchBox.jsx'

import './css/NavBar.css';

class NavBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="navBar">
				<div className="logo col-md-2">
					<img src="../../img/logo.png" alt="SenecAsks logo"/>
				</div>
				<div className="searchbox col-md-3">
					<SearchBox></SearchBox>	
				</div>
				<div className="buttons col-md-7">
					<button className="tab">Preguntas</button>
					<button className="tab">Usuarios</button>
					<button className="userbut">Login</button>
					<button className="userbut">Registrarse</button>
				</div>
			</div>
		);
	}

}

export default NavBar;