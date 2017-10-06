import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';

import './css/App.css';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<NavBar></NavBar>
					<StaticSideBar></StaticSideBar>
					<div className="container top40 main">
						<QuestionList></QuestionList>
					</div>
				</div>
			);
	}
}

export default App;
