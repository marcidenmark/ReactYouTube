import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyA7xjqxI8Dobx2EhGsKG4xBOQzhUZ5JD-g';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term: 'stephencolbert'}, (videos)=> {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video= {this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// line 25 we are passing information from the parent component (App) to the
// child component,  <VideoList />.
// Defining a property on the JSX tag <VideoList />. line 25
// Videos = reference to a  {Javascript variable} so you use the {}
// Passing data thorugh PROPS.-- passing prop, videos to <VideoList />
// videos =  comes from the object, {videos} on line 14
// Every time the app rerenders-- when this.setState is called,  <VideoList /> will get the
// new list of videos.
ReactDOM.render(<App />, document.querySelector('.container'));
