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
		var votesToCast=1+this.props.votes;
		Questions.update(this.props.identifier, {
      $set: { votes: votesToCast },
    });
  }
	castVoteNegative(event){
		var votesToCast=this.props.votes-1;
		Questions.update(this.props.identifier, {
			$set: { votes: votesToCast },
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
