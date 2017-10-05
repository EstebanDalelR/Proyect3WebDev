import React, {Component} from 'react';

/**
Clase para mostrar una pregunta
**/
class Question extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div className="question">
					<h4>{this.props.question.title}</h4>
					<p>{this.props.question.text}</p>
				</div>
			);
	}
}


export default Question;