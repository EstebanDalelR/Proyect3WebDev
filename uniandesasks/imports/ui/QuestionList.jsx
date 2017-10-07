import React, {Component} from 'react';
import Question from './Question.jsx';
import {Editor, EditorState, RichUtils} from "draft-js";


import './css/draft.css';
/**
Clase para mostrar una lista de preguntas
**/
class QuestionList extends Component{
	constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
			questions: [
			]
		};
		this.onChange = (editorState) => this.setState({editorState});
	}
	//Editor methods
	_onBoldClick() {
		this.onChange(RichUtils.toggleInlineStyle(
			this.state.editorState,
			"BOLD"
		));
	}

	handleKeyCommand = (command) => {
  const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

  if (newState) {
    this.onChange(newState);
    return 'handled';
  }

  return 'not-handled';
}

//Question methods
	sortQuestions(){
		this.props.questions.sort(function(a, b) {
			return parseInt(b.votes) - parseInt(a.votes);
		});
	}

	renderQuestions(){
		this.sortQuestions();
		return(
			this.props.questions.map((q)=>{
				return <Question key={q._id} question={q}/>
			})
		);
	}

	render(){

		return(
			<div className="container container-fluid">
				<h1>Un amigo de Seneca pregunta:</h1>
				<div className=" rounded border border-secondary">
					<h4>Escribe aquí tu pregunta:</h4>

					<h4>Explica tu pregunta</h4>
					<Editor id="DraftEditor-root"
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
				<div className="container container-fluid">
					{this.renderQuestions()}
				</div>
			</div>
		);
	}
}

export default QuestionList;
