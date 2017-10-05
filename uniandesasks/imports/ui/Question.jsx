import React, {Component} from 'react';
import Vote from './Vote.js'
import Answer from './Answer.js'
/**
Clase para mostrar una pregunta
**/
class Question extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<table className="question">
					<tr>
						<td><Vote/></td>
						<td>{this.props.question.title}</td>
					</tr>
					<tr>
						<td></td>
						<td>{this.props.question.text}</td>
					</tr>
				</table>
			);
	}
}


export default Question;
