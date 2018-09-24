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
// adding another initializer to the state!
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('siliconvalley')

	}
// definging a callback
// videoSearch is a method with
// one parameter, a string, (term)
// this method, videoSearch is passed down to the SearchBar component
	videoSearch(term) {
		YTSearch({key:API_KEY, term: term}, (videos)=> {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video= {this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));


// line 25 we are passing information from the parent component (App) to the
// child component,  <VideoList />.
// Defining a property on the JSX tag <VideoList />. line 25
// Videos = reference to a  {Javascript variable} so you use the {}
// Passing data thorugh PROPS.-- passing prop, videos to <VideoList />
// videos =  comes from the object, {videos} on line 14
// Every time the app rerenders-- when this.setState is called,  <VideoList /> will get the
// new list of videos.
