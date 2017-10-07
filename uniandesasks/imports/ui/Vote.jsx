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
		let buttonStyle = {
  	padding: 2,
		};
		return(
			<div className= "">
          <button className='btn-sm btn-success btn-group-vertical' style={buttonStyle}>
						/\
					</button>
          <p className='m-0'>{this.props.votes}</p>
          <button className='btn-sm btn-danger btn-group-vertical' style={buttonStyle}>
						\/
					</button>
        </div>
			);
	}
}


export default Vote;
