import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Question from './Question.jsx';
import {Editor, EditorState, RichUtils} from "draft-js";
import ReactDOM from 'react-dom';


import './css/draft.css';
/**
Clase para mostrar una lista de preguntas
**/
class QuestionList extends Component{
	constructor(props){
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
		this.onChange = (editorState) => this.setState({editorState});
	}

	selectQuestion(quest){
		this.props.selectQuestion(quest);
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
	renderQuestions(){
		return(
			this.props.questions.map((q)=>{
				return <Question key={q._id} question={q} selectQuestion={this.selectQuestion.bind(this)}/>
			})
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		// Find the text field via the React ref
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

		Questions.insert({
			text,
			createdAt: new Date(), // current time
		});

		// Clear form
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render(){

		return(
			<div className="container container-fluid">
				<h1>Un amigo de Seneca pregunta:</h1>
				<div className=" rounded border border-secondary">
					<h4>Escribe aquí tu pregunta:</h4>
					<form className="new-question" onSubmit={this.handleSubmit.bind(this)} >
						<input
							type="text"
							ref="textInput"
							placeholder="¿Qué quieres preguntar?"
						/>
					</form>
					<h4>Explica tu pregunta</h4>
					<Editor id="DraftEditor-root"
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						placeholder="¿Quieres agregar algo?"
					/>
				</div>
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
