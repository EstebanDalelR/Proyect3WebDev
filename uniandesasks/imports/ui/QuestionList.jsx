import React, {Component} from 'react';
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
					"_id":"132123vasvasfvas",
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
					"_id":"132123vasvasfvas",
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
					"_id":"22222vasvasfvas",
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
	sortQuestions(){
		this.state.questions.sort(function(a, b) {
			return parseInt(b.votes) - parseInt(a.votes);
		});
	}

	renderQuestions(){
		this.sortQuestions();
		return(
			this.state.questions.map((q)=>{
				return <Question key={q.key} question={q}/>
			})
		);
	}

	render(){
		return(
			<div className="container container-fluid">
				<h1>Frequently Asked Questions</h1>
				<div className="">
					{this.renderQuestions()}
				</div>
			</div>
		);
	}
}

export default QuestionList;
