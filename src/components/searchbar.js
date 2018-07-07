import React,{Component} from 'react';


class SearchBar extends Component{

  constructor(props){
      super(props);
  }

render(){
    return <input onChange={event =>{this.get(event.target.value)}}/>;
}
get(term){
this.props.getData(term)
}
}

export default SearchBar;