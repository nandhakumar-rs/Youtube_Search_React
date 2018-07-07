import React from 'react';


const vid = (props)=>{

    return (
<div onClick = {()=>{props.selectv(props.video)}}><div>
    <img src={props.video.snippet.thumbnails.default.url}/>
    <p>{props.video.snippet.title}</p>

    <br/>
    </div>
  
</div>
    )
    
props.video



}


export default vid;