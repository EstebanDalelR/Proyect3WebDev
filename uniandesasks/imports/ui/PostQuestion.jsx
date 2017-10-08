import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Questions} from '../../imports/api/Questions.js';

class PostQuestion extends Component{
	constructor(props){
		super(props);
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
			<div>
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
			</div>
		);
	}
}

export default PostQuestion;