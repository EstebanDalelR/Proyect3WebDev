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
			</div>
		);
	}

}

NavButtons.PropTypes={
  returnHome: PropTypes.func.isRequired
};

export default NavButtons;