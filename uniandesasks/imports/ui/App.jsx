import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


import NavBar from './NavBar.jsx';
import QuestionList from './QuestionList.jsx';
import StaticSideBar from './StaticSideBar.jsx';
import QuestionAnswers from './QuestionAnswers.jsx';
import {Questions} from '../../imports/api/Questions.js';


import './css/App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {questionSelected: ' ',
	};
}

returnHome(){
	this.setState(()=>{return{questionSelected:' '}});
	console.log('return home');
}

selectQuestion(quest){
	this.setState(()=>{return{questionSelected:quest}});
	console.log('something selected');
	console.log(quest);
}

render(){
	return(
		<div>
			<NavBar/>
			<StaticSideBar currentUser={this.props.currentUser} returnHome={this.returnHome.bind(this)}/>
			<div className="container top40 main">
				{(this.state.questionSelected === ' ')?
					<QuestionList selectQuestion={this.selectQuestion.bind(this)} questions={this.props.questions}/>:
						<QuestionAnswers questionSelected={this.state.questionSelected}/>}
			</div>
		</div>
	);
}
}

export default AppContainer = createContainer((props) => {
	if(Meteor.user()){
		Meteor.subscribe('user');
	}
	return {
		_id: Meteor.userId(),
		currentUser: (Meteor.user())?Meteor.usimport React, {Component} from 'react';
2
import PropTypes from 'prop-types';
3
import { Meteor } from 'meteor/meteor';
4
import { createContainer } from 'meteor/react-meteor-data';
5
​
6
​
7
import NavBar from './NavBar.jsx';
8
import QuestionList from './QuestionList.jsx';
9
import StaticSideBar from './StaticSideBar.jsx';
10
import QuestionAnswers from './QuestionAnswers.jsx';
11
import {Questions} from '../../imports/api/Questions.js';
12
​
13
​
14
import './css/App.css';
15
​
16
class App extends Component{
17
        constructor(props){
18
                super(props);
19
                this.state = {questionSelected: ' '};
20
        }
21
​
22
        returnHome(){
23
                this.setState(()=>{return{questionSelected:' '}});
24
                console.log('return home');
25
        }
26
​
27
        selectQuestion(quest){
28
                this.setState(()=>{return{questionSelected:quest}});
29
                console.log('something selected');
30
                console.log(quest);
31
        }
32
​
33
        render(){
34
                return(
35
                                <div>
36
                                        <NavBar/>
37
                                        <StaticSideBar currentUser={this.props.currentUser} returnHome={this.returnHome.bind(this)}/>
38
                                        <div className="container top40 main">
39
                                                {(this.state.questionSelected === ' ')?<QuestionList selectQuestion={this.selectQuestion.bind(this)}/>:<QuestionAnswers questionSelected={this.state.questionSelected}/>}
40
                                        </div>
41
                                </div>
42
                        );
43
        }
44
}
45
​
46
export default AppContainer = createContainer((props) => {
47
        if(Meteor.user()){
48
        Meteor.subscribe('user');
49
        }er():{},
		questions: Questions.find({}, { $sort : { votes : -1, answers: 1 } }).fetch(),
	};
}, App);
