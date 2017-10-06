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
        }
			]
		}
	}

	renderQuestions(){
		return(
			this.state.questions.map((q)=>{
				return <Question key={q.key} question={q}/>
			})
		);
	}

	render(){
		return(
			<div className="container qListContainer">
				<h1>Frequently Asked Questions</h1>
				<div className="qList">
					{this.renderQuestions()}
				</div>
			</div>
		);
	}
}

export default QuestionList;
