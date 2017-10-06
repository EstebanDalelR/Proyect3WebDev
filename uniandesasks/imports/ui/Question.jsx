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

	render(){
		return(
			<table className="container-fluid table-responsive border border-secondary border-top-0 border-right-0 border-left-0 rounded">
				<tbody>
					<tr className="table-primary">
						<td >{this.props.question.theme}</td>
						<td><b>{this.props.question.title}</b></td>
					</tr>
					<tr>
						<td><Vote votes={this.props.question.votes}/></td>
						<td>{this.props.question.text}</td>
					</tr>
					<tr>
						<td><b>At: </b>
						{new Date(this.props.question.postedat).toLocaleString()}</td>
						<td><p><b>Published by:</b>{this.props.question.poster}</p></td>
					</tr>
					<tr>
						<td></td>
						<td><Answer answers={this.props.question.answers}/></td>
					</tr>
				</tbody>
			</table>
		);
	}
}


export default Question;
