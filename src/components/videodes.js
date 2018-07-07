import React,{Component} from 'react';

const videodes = (props)=>{
    if(!props.vid){
        return <p>no video</p>
    }

const url = "https://www.youtube.com/embed/"+   props.vid.id.videoId;

    return (<div>
       <iframe src ={url}></iframe>
       
       
        </div>)
}


export default videodes;