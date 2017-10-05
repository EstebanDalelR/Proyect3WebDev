import React, {Component} from 'react';

import QuestionButton from './QuestionButton.jsx';

/**
	Clase para mostrar una lista de preguntas
**/
class QuestionList extends Component{
	constructor(props){
		super(props);

		this.state = {
			questions: [
				{key:1, title: 'Pregunta1', text:'una pregunta'},
				{key:2, title: 'Pregunta2', text:'dos preguntas'},
				{key:3, title: 'Pregunta3', text:'tres preguntas'},
				{key:4, title: 'Pregunta4', text:'dos preguntas'},
				{key:5, title: 'Pregunta5', text:'tres preguntas'},
				{key:6, title: 'Pregunta6', text:'dos preguntas'},
				{key:7, title: 'Pregunta7', text:'tres preguntas'},
				{key:8, title: 'Pregunta8', text:'dos preguntas'},
				{key:9, title: 'Pregunta9', text:'tres preguntas'},
				{key:10, title: 'Pregunta10', text:'dos preguntas'},
				{key:11, title: 'Pregunta11', text:'tres preguntas'},
				{key:12, title: 'Pregunta12', text:'dos preguntas'},
				{key:13, title: 'Pregunta13', text:'tres preguntas'},
				{key:14, title: 'Pregunta14', text:'dos preguntas'},
				{key:15, title: 'Pregunta15', text:'tres preguntas'},
				{key:16, title: 'Pregunta16', text:'dos preguntas'},
				{key:17, title: 'Pregunta17', text:'tres preguntas'},
				{key:18, title: 'Pregunta18', text:'dos preguntas'},
				{key:19, title: 'Pregunta19', text:'tres preguntas'},
				{key:20, title: 'Pregunta20', text:'dos preguntas'},
				{key:21, title: 'Pregunta21', text:'tres preguntas'},
				{key:22, title: 'Pregunta22', text:'dos preguntas'},
				{key:23, title: 'Pregunta23', text:'tres preguntas'},
				{key:24, title: 'Pregunta24', text:'dos preguntas'},
				{key:25, title: 'Pregunta25', text:'tres preguntas'}
			]
		}
	}

	renderQuestions(){
		return(
			this.state.questions.map((q)=>{
				return <QuestionButton key={q.key} question={q}></QuestionButton>
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