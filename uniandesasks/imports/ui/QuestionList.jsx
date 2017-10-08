import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Question from './Question.jsx';

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

	//submit button handler
	handleSubmit(event) {
		event.preventDefault();

		// Find the text field via the React ref
		var title = ReactDOM.findDOMNode(this.refs.questionAsked).value.trim();
		var text = ReactDOM.findDOMNode(this.refs.questionText).value.trim();
		var theme = ReactDOM.findDOMNode(this.refs.questionTheme).value.trim();
		var postedat =Date.now();
		var votes = 0;
		var answers = [];
		var userId = Meteor.userId();
		var poster =  Meteor.user().name;
		Questions.insert({
			title,
			postedat,
			theme,
			votes,
			answers,
			text,
			userId,
			poster,
		});
		alert("Pregunta subida")

		Meteor.call('users.questions', {
		  userId: userId
		}, (err, res) => {
		  if (err) {
		    alert(err);
		  } else {
		    // success!
		  }
		});

		// Clear form
		ReactDOM.findDOMNode(this.refs.questionAsked).value = '';
		ReactDOM.findDOMNode(this.refs.questionTheme).value = '';
		ReactDOM.findDOMNode(this.refs.questionText).value = '';
	}

	render(){

		return(
			<div className="container container-fluid">
				<h1>Un amigo de Seneca pregunta:</h1>
				<div className=" rounded border border-secondary">
					<h4>Escribe aquí el tema de tu pregunta:</h4>
						<input
							className="container-fluid border"
							type="text"
							ref="questionTheme"
						/>
						<h4>Escribe aquí tu pregunta:</h4>
							<input
								className="container-fluid border"
								type="text"
								ref="questionAsked"
							/>
					<h4>Explica tu pregunta:</h4>
					<input
						className="container-fluid border"
						type="text"
						ref="questionText"
					/>
				</div>
				<button className='btn-primary btn-lg'
					onClick={this.handleSubmit.bind(this)}>
					Preguntar
				</button>

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
