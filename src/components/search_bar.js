import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
	super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
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

