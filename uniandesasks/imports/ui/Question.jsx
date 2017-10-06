import React, {Component} from 'react';
import Vote from './Vote.jsx'
import Answer from './Answer.jsx'
/**
Clase para mostrar una pregunta
**/
class Question extends Component{
	constructor(props){
		super(props);
	}

	// transformDate(dateInMilis){
	// 	return (new Date(dateInMilis).toLocaleString())
	// }

	render(){
		return(
				<table className="question">
					<tr>
						<td><Vote votes={this.props.question.votes}/></td>
						<td><b>{this.props.question.title}</b></td>
					</tr>
					<tr>
						<td></td>
						<td>{this.props.question.text}</td>
					</tr>
					<tr>
						<td>{this.props.question.postedat}</td>
						<td><p>{this.props.question.poster}</p></td>
					</tr>
					<tr>
						<td></td>
						<td><Answer answers={this.props.question.answers}/></td>
					</tr>
				</table>
			);
	}
}


export default Question;
