import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, CSS} from "draft-js";

import Question from './Question.jsx';

import {Questions} from '../../imports/api/Questions.js';

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
	handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

		if (newState) {
			this.onChange(newState);
			return 'handled';
		}

		return 'not-handled';
	}

	onUnderlineClick = () => {
   this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
	onBoldClick = () => {
	 this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}
	onToggleCode = () => {
 this.onChange(RichUtils.toggleCode(this.state.editorState));
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
		var postedat =Date.now();
		var theme = ReactDOM.findDOMNode(this.refs.questionTheme).value.trim();
		var votes = 0;
		var answers = [];
		Questions.insert({
			title,
			postedat,
			theme,
			votes,
			answers,// current time
		});

		Meteor.call('users.questions', {
		  userId: Meteor.userId()
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
					<button
						className="btn btn-outline-secondary"
						onClick={this.onUnderlineClick}>
						<u>Underline</u>
					</button>
					<button
						className="btn btn-outline-secondary"
						onClick={this.onBoldClick}>
						<b>Bold</b>
					</button>
					<button
						className="btn btn-outline-secondary"
						onClick={this.onToggleCode}>
						Code Block
					</button>
					<Editor
						id="DraftEditor-root"
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						ref="questionText"
						placeholder="Explica aquí"
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
