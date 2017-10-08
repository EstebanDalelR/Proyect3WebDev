import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Questions} from '../../imports/api/Questions.js';


class AddAnswer extends Component{
	constructor(props){
		super(props);
	}
	//submit button handler
	handleSubmit(event) {
		event.preventDefault();

		// Find the text field via the React ref
		var text = ReactDOM.findDOMNode(this.refs.answerText).value.trim();
		var postedat =Date.now();
		var votes = 0;
		var answers = { text: text, postedat:postedat, votes:votes };
		Questions.update(
			this.props.identifier, {
			$push: {answers}

		});
		alert("Respuesta subida, gracias!")

		// Clear form
		ReactDOM.findDOMNode(this.refs.answerText).value = '';
	}
	render(){
		return(
			<div>
				<h4>Escribe tu respuesta:</h4>
				<input
					className="container-fluid border"
					type="text"
					ref="answerText"
				/>
			<button className='btn-primary btn-lg'
				onClick={this.handleSubmit.bind(this)}>
				Preguntar
			</button>
			</div>
		);
	}
}

export default AddAnswer;
