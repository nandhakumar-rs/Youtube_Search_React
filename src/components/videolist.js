import React from 'react'
import Video from './video'

const videolist = (props)=>{
if(props.showVideo.length == 0){
    return <p>Loading</p>
}
  const v =   props.showVideo.map(vid=>{
        return <Video selectv = {props.selectVideo} key={vid.etag} video={vid}/>
    })

return (<ul>{v}</ul>)

}



export default videolist;