import React, { Component } from 'react';
import './App.css';

function getRandomIntInclusive(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + min;
}

function randomIntSequence(min, max, round) {
  const result = [];
  for (let i = 0; i < round; i++) {
    let loop = false;
    do {
      const random = getRandomIntInclusive(min, max);
      if (result.indexOf(random) > -1) {
        loop = true;
      } else {
        loop = false;
        result.push(random);
      }
    } while (loop);
  }

  return result;
}

function stringstring(value) {
  return typeof value === 'string' && value.length > 0;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: '',
      target: '',
    };
  }

  validate = (value) => {
    console.log(value);
    if (value.length % 2 !== 0) {
      alert('输入行数需要为偶数行');
      return false;
    }

    return true;
  };

  regularize = (value) => {
    const temp = value.trim().split('\n');
    const filteredValue = temp.filter(stringstring);
    return filteredValue;
  };

  transform = () => {

    const sentences = this.regularize(this.state.source);
    if (!this.validate(sentences)) return;

    const group = [];
    for (let i = 0; i < sentences.length; i += 2) {
      group.push([sentences[i], sentences[i + 1]].join('\n'));
    }

    const groupCount = sentences.length / 2;
    const sequence = randomIntSequence(0, groupCount - 1, groupCount);
    const result = sequence.map((value) => {
      return group[value];
    });

    this.setState({
      target: result.join('\n\n'),
    });

    // const rand = getRandomIntInclusive(0, sentences.length - 1);
    // const index = rand % 2 !== 0 ? rand - 1 : rand;

    // const result = [sentences[index], sentences[index + 1]].join('\n');
    // this.setState({
    //   target: result,
    // });
  };

  handleSourceChange = (event) => {
    this.setState({
      source: event.target.value,
    });
  };

  handleSourceChange = (event) => {
    this.setState({
      source: event.target.value,
    });
  };


  render() {
    return (
      <div className="container">
        <div className="leftContainer">
          <textarea
            value={this.state.source}
            className="source"
            placeholder="输入源"
            onChange={this.handleSourceChange}
            multiple
          />
        </div>
        <button className="button" onClick={this.transform}>随机变换</button>
        <div className="rightContainer">
          <textarea
            value={this.state.target}
            className="target"
            placeholder="输出"
          />
        </div>
      </div>
    );
  }
}

export default App;
