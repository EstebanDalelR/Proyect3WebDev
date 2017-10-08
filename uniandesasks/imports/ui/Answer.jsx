import React, { Component } from 'react';
import Vote from './Vote.jsx'

class Answer extends Component {

  findBestAnswer(){
    if(this.props.answers.length){
      var bestAnswer = this.props.answers[0];
      for (var i = 1; i < this.props.answers.length; i++) {
        if(this.props.answers[i].votes>bestAnswer.votes){
          bestAnswer=this.props.answers[i];
        }
      }
      return bestAnswer;
    }
  }

  render() {
    var bestAnswer = this.findBestAnswer();
    return (
      <div className= "row rounded border">
        <div className= "col-2"><Vote votes={bestAnswer.votes}/></div>
        <div className="">
          <p>
            <b>R:</b>
            {bestAnswer.text}
          </p>
          <p>
            <b>Response by:</b>
            {bestAnswer.poster}
          </p>
          <p>
            <b>At:</b>
            {new Date(bestAnswer.postedat).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

}

export default Answer;
