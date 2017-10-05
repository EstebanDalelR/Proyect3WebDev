import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<NavBar></NavBar>
					<div className="container top40">
						<QuestionList></QuestionList>
						<StaticSideBar></StaticSideBar>
					</div>
				</div>
			);
	}
}

export default App;