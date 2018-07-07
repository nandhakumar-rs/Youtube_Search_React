import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchbar';
import YTsearch from 'youtube-api-search'
import VideoList from './components/videolist'
import VideosDes from './components/videodes'
const API_KEY = 'AIzaSyARLFLhp39oDBEOaW7j_oYQi9nZ7TA380Y';


class App extends Component{
constructor(props){
    super(props);
    this.state = {term: '',videos:[],select:null}

}
render(){
    return (<div>

<SearchBar getData={data =>this.search(data)}/>
<VideosDes vid={this.state.select}/>
        <VideoList selectVideo = {vid=>{this.setState({select:vid})
    console.log(this.state.select)}} showVideo = {this.state.videos}/>
    </div>);
}

search(data){
    this.setState({term:data})
    YTsearch({key:API_KEY,term:this.state.term},data =>{
        this.setState({videos:data})
        console.log(this.state.videos)
            })
}
}


ReactDom.render(<App/>,document.querySelector('.container'));
