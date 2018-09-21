import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
	super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}
export default SearchBar;
// line 13 creates the element starting as an empty string.
// line 13 the value of the input is equal to the state.

//
// to do:
// User can type input which will trigger
// an API request to the YouTube API.
// It should update the video list on the right hand side.

