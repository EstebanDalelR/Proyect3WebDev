import React, {Component} from 'react';
import Vote from './Vote.jsx'
import Answer from './Answer.jsx'
import PropTypes from 'prop-types';
/**
Clase para mostrar una pregunta
**/
class Question extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container-fluid  rounded border border-secondary">
				<div className= "row">
					<div className= "col-2">{this.props.question.theme}</div>
					<div><b>{this.props.question.title}</b></div>
				</div>

				<div className= "row">
					<div className= "col-2"><Vote votes={this.props.question.votes}/></div>
					<div>{this.props.question.text}</div>
				</div>

				<div className= "row">
					<div className= "col-2"><p><b>By:</b>{this.props.question.poster}</p></div>
					<div><b>At: </b>{new Date(this.props.question.postedat).toLocaleString()}</div>
				</div>
				<Answer answers={this.props.question.answers}/>
			</div>
		);
	}
}
Question.PropTypes={
  theme: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	votes: PropTypes.number.isRequired,
};

export default Question;
