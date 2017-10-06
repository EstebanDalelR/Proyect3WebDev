import React, { Component } from 'react';

class Answer extends Component {

  findBestAnswer(){
    var bestAnswer = this.props.answers[0];
    for (var i = 1; i < this.props.answers.length; i++) {
      if(this.props.answers[i].votes>bestAnswer.votes){
        bestAnswer=this.props.answers[i];
      }
    }
    return bestAnswer;
  }

  render() {
    var bestAnswer = this.findBestAnswer();
    return (
      <div>
        <p>
          {bestAnswer.text}
        </p>
        <p>Posted by: 
          {bestAnswer.poster}
        </p>
        <p>At:
        {bestAnswer.postedat}
        </p>
      </div>
    );
  }

}

export default Answer;
