import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './css/NavButtons.css';

class NavButtons extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="navButtons">
				<button className="navbutton" onClick={()=>{this.props.returnHome()}}>Inicio</button>
				<button className="navbutton">2</button>
				<button className="navbutton">3</button>
				<button className="navbutton">4</button>
			</div>
		);
	}

}

NavButtons.PropTypes={
  returnHome: PropTypes.func.isRequired
};

export default NavButtons;