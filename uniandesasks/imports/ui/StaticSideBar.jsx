import React, {Component} from 'react';

class StaticSideBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="sideBar static">
				<h3>My Static SideBar</h3>
			</div>
		);
	}

}

export default StaticSideBar;