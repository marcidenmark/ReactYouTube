import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA7xjqxI8Dobx2EhGsKG4xBOQzhUZ5JD-g';


class App extends Component {
	constructor(props) {
		super(props);
// adding another initializer to the state!
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('siliconvalley')
		// this is a method-- videoSearch

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
		const videoSearch = _ .debounce((term ) => { this.videoSearch(term)}, 300 )
		// the function will be called once every 300 miliseconds
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video= {this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));
		// this.videoSearch('siliconvalley')
		// videoSearch is a method.
		// we call it in the SearchBar
		// onto the property, on SearchTermChange: ( props.onSearchChange)
//

// line 25 we are passing information from the parent component (App) to the
// child component,  <VideoList />.
// Defining a property on the JSX tag <VideoList />. line 25
// Videos = reference to a  {Javascript variable} so you use the {}
// Passing data thorugh PROPS.-- passing prop, videos to <VideoList />
// videos =  comes from the object, {videos} on line 16
// Every time the app rerenders-- when this.setState is called,
// <VideoList /> will get the new list of videos.
