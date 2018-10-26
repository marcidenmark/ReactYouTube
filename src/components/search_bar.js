import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
	super(props);
		this.state = { searchterm: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.searchterm}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(searchterm) {
		this.setState({searchterm});
		this.props.onSearchTermChange(searchterm);
	}
}
export default SearchBar;

// line 13 creates the element starting as an empty string.
// line 13 the value of the input is equal to the state.

// line 19, onINputChange has 2 functions:
	//Line 20
	// sets state.
	// line  21 fiers off call back onSearchTermChange
// to do:
// User can type input which will trigger
// an API request to the YouTube API.
// It should update the video list on the right hand side.

