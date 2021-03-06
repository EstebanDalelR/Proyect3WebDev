import React, {Component} from 'react';
import QuestionVote from './QuestionVote.jsx';
import Answer from './Answer.jsx';
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
					<button onClick={()=>{this.props.selectQuestion(this.props.question)}}><b>{this.props.question.title}</b></button>
				</div>

				<div className= "row">
					<div className= "col-2">
						<QuestionVote votes={this.props.question.votes} identifier={this.props.question._id}/>
					</div>
					<div>{this.props.question.text}</div>
				</div>

				<div className= "row">
					<div className= "col-2"><p><b>By:</b>{this.props.question.poster}</p></div>
					<div><b>At: </b>{new Date(this.props.question.postedat).toLocaleString()}</div>
				</div>
				{(this.props.question.answers.length> 0)?
				  <Answer answers={this.props.question.answers}/>:<div></div>
				}
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
