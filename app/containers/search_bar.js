import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrganization} from '../actions/index';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
    // bind this context
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event){
    this.setState({term: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchOrganization(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className='input-group'>
        <input
          placeholder='search all organizations'
          className='form-control'
          value={this.state.term}
          //value of this is not Component
          onChange={this.handleInput}
         />
        <span className='input-group-button'>
          <button className='btn btn-secondary left' type='submit'>submit</button>
        </span>
      </form>
    )
  }
}

//provide access to this.state.props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchOrganization}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
