import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
    // bind this context
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({term: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className=''>
        <input
          placeholder='search for an organization'
          className=''
          value={this.state.term}
          //value of this is not Component
          onChange={this.handleInput}
         />

        <span className=''>
          <button className='' type='submit'>submit</button>
        </span>
      </form>
    )
  }
}
