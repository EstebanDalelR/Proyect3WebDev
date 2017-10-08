import React, {Component} from 'react';
import {Questions} from '../../imports/api/Questions.js';

/**
Clase para mostrar los botones de voto y puntaje de una pregunta
**/
class QuestionVote extends Component{
	constructor(props){
		super(props);
	}

	castVotePositive(event){
		var vote='up';
		this.methodVote(vote);
	}

	castVoteNegative(event){
		var vote='down';
		this.methodVote(vote);
	}

	methodVote(vote){
		var id=this.props.identifier
		Meteor.call('questions.vote',{id, vote},
			(err,res)=>{
				if(err){
					console.log(err);
				}else{
					//Lo logro
				}
			});
	}

	render(){
		let buttonStyle = {
  	padding: 2,
		};
		return(
			<div className= "">
          <button className='btn-sm btn-success btn-group-vertical'
						style={buttonStyle}
						onClick={this.castVotePositive.bind(this)}>
						/\
					</button>
          <p className='m-0'>{this.props.votes}</p>
          <button className='btn-sm btn-danger btn-group-vertical'
						style={buttonStyle}
						onClick={this.castVoteNegative.bind(this)}>
						\/
					</button>
        </div>
			);
	}
}


export default QuestionVote;
