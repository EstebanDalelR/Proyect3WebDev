import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import Vote from './Vote.jsx';

class QuestionAnswers extends Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.questionSelected.answers);
		return(
			<div className="container-fluid  rounded border border-secondary">
				<div className= "row">
					<div className= "col-2">{this.props.questionSelected.theme}</div>
					<div><b>{this.props.questionSelected.title}</b></div>
				</div>

				<div className= "row">
					<div className= "col-2"><Vote votes={this.props.questionSelected.votes}/></div>
					<div>{this.props.questionSelected.text}</div>
				</div>

				<div className= "row">
					<div className= "col-2"><p><b>By:</b>{this.props.questionSelected.poster}</p></div>
					<div><b>At: </b>{new Date(this.props.questionSelected.postedat).toLocaleString()}</div>
				</div>
				{this.props.questionSelected.answers.map((q, i)=>{return <Answer key={i} answers={[q]}></Answer>})}
				<AddAnswer></AddAnswer>
			</div>
		);
	}
}

QuestionAnswers.PropTypes = {
	questionSelected: PropTypes.object.isRequired
}

export default QuestionAnswers;