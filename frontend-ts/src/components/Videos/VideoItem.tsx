import React from 'react'
import Video from './VideoInterface'

interface Props {
    video: Video
}

export const VideoItem = ({ video }: Props) => {
    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
        </div>
    )
}
export default VideoItem