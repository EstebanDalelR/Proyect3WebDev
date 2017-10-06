import React, {Component} from 'react';
/**
Clase para mostrar los botones de voto y puntaje de una pregunta
**/
class Vote extends Component{
	constructor(props){
		super(props);
	}

  castVote(event){
    if(event==='VoteUp')
    {
      // TODO: cast positive
    }
    else {
      //TODO: cast negative
    }
  }

	render(){
		return(
				<div>
          <button className='VoteUp btn-group-vertical'>Up</button>
          <p>{this.props.votes}</p>
          <button className='VoteDown btn-group-vertical'>Down</button>
        </div>
			);
	}
}


export default Vote;
