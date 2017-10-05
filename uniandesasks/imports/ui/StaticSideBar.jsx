import React, {Component} from 'react';

import './css/StaticSideBar.css';

class StaticSideBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="sideBar">
				<h3>My Static SideBar</h3>
			</div>
		);
	}

}

export default StaticSideBar;