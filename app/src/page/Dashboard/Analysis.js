// Analysis.js
import DPlayer from "dplayer";
import React, {useEffect} from 'react';

const VideoPlayer = () => {

    useEffect( () => {
        const url = 'http://static.smartisanos.cn/common/video/t1-ui.mp4';
        const dp = new DPlayer({
            container: document.getElementById('video'),
            video: {
                url,
            },
        });
        dp.play();
    }, []);

    return (<div id="video" />);
}
export default VideoPlayer;