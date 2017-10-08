import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Question from './Question.jsx';
import PostQuestion from './PostQuestion.jsx';

import {Questions} from '../../imports/api/Questions.js';

/**
Clase para mostrar una lista de preguntas
**/
class QuestionList extends Component{
	constructor(props){
		super(props);
	
	}

	selectQuestion(quest){
		this.props.selectQuestion(quest);
	}

	//Question methods
	renderQuestions(){
		return(
			this.props.questions.map((q)=>{
				return <Question key={q._id} question={q} selectQuestion={this.selectQuestion.bind(this)}/>
			})
		);
	}

	render(){

		return(
			<div className="container container-fluid">
				<h1>Un amigo de Seneca pregunta:</h1>
				{(Meteor.user())?<PostQuestion/>:<div>Debes estar registrado para preguntar en SenecAsks</div>}
				<div className="container container-fluid">
					{this.renderQuestions()}
				</div>
			</div>
		);
	}
}

QuestionList.PropTypes={
	selectQuestion: PropTypes.func.isRequired
}

export default QuestionList;
