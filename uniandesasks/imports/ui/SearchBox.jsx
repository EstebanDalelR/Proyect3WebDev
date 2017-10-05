import React, {Component} from 'react';

import './css/SearchBox.css';

class SearchBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="search">
				<input type="search" className="input" placeholder="Escriba su pregunta"/>
			</div>
		);
	}
}

export default SearchBox;