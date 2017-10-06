import React, {Component} from 'react';

import './css/NavButtons.css';

class NavButtons extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="navButtons">
				<button className="navbutton">1</button>
				<button className="navbutton">2</button>
				<button className="navbutton">3</button>
				<button className="navbutton">4</button>
			</div>
		);
	}

}

export default NavButtons;