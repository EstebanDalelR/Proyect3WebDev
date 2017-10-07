import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Question from './Question.jsx';

/**
Clase para mostrar una lista de preguntas
**/
class QuestionList extends Component{
	constructor(props){
		super(props);

		this.state = {
			questions: [
				{
					"_id":"132123vasvasfvaas",
					"poster": "estebandalelr",
					"postedat": 24134315345,
					"theme": "physics",
					"title": "why is the sky blue?",
					"text": "yes",
					"votes": 0,
					"answers":
					[
						{
							"poster": "estebandalelr",
							"postedat": 24134315345,
							"text": "Una respuesta al cielo",
							"votes": 0
						},
						{
							"poster": "samuelbaq",
							"postedat": 24134315345,
							"text": "no",
							"votes": -3
						}
					]
				},
				{
					"_id":"132123vasvdasfvas",
					"poster": "estebandalelr",
					"postedat": 24134315345,
					"theme": "bio",
					"title": "why is the whale blue?",
					"text": "yes",
					"votes": 7,
					"answers":
					[
						{
							"poster": "estebandalelr",
							"postedat": 24134315345,
							"text": "Una respuesta al cielo",
							"votes": 0
						},
						{
							"poster": "samuelbaq",
							"postedat": 24134315345,
							"text": "no",
							"votes": -3
						}
					]
				},
				{
					"_id":"22222vasvas3fvas",
					"poster": "otro",
					"postedat": 1507260551496,
					"theme": "Math",
					"title": "why is it so harrrd?",
					"text": "I never undertsnd shit",
					"votes": 4,
					"answers":
					[
						{
							"poster": "estebandalelr",
							"postedat": 1507260551496,
							"text": "Una respuesta a la matematica",
							"votes": 0
						},
						{
							"poster": "samuelbaq",
							"postedat": 1507260551496,
							"text": "no",
							"votes": -3
						}
					]
				}
			]
		}
	}

	selectQuestion(quest){
		this.props.selectQuestion(quest);
	}

	sortQuestions(){
		this.state.questions.sort(function(a, b) {
			return parseInt(b.votes) - parseInt(a.votes);
		});
	}

	renderQuestions(){
		this.sortQuestions();
		return(
			this.state.questions.map((q)=>{
				return <Question key={q._id} question={q} selectQuestion={this.selectQuestion.bind(this)}/>
			})
		);
	}

	render(){
		return(
			<div className="container container-fluid">
				<h1>Un amigo de Seneca pregunta:</h1>
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
