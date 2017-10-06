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
        <p><b>R:</b>
          {bestAnswer.text}
        </p>
        <p><b>Response by:</b>
          {bestAnswer.poster}
        </p>
        <p><b>At:</b>
          {new Date(bestAnswer.postedat).toLocaleString()}
        </p>
      </div>
    );
  }

}

export default Answer;
