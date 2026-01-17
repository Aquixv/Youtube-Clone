import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import Vagabond from '../../assets/Vagabond.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import Aquii from '../../assets/Aquii.jpeg'
import { comm_Converter, subs_Converter, Value_Converter } from '../../../convert'
import { like_Converter} from '../../../convert'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import { data } from 'react-router-dom'
dayjs.extend(relativeTime); 
const API_KEY = import.meta.env.VITE_API_KEY;
const PlayVideo = ({videoId}) => {

    const [apiData,setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [commentData, setcommentData] = useState([]);
    const fetchVideoData = async() =>{
    
    const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(VideoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }
    useEffect(() =>{
        fetchVideoData();
    },[])

    const fetchOtherData = async() =>{
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

    //fetch comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=50&key=${API_KEY}`
    await fetch(comment_url).then(res => res.json()).then(data => setcommentData(data.items))
    }
       useEffect(() =>{
        fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
     {/* <video src= {Vagabond} controls autoPlay muted></video> */}
     <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
     <div className="play-video-info">
        <p>{apiData?Value_Converter(apiData.statistics.viewCount):'16k'} &bull; {apiData?dayjs(apiData.snippet.publishedAt).fromNow():"unavailable"}</p>
     <div>
     <span><img src= {like} alt='like'/>{apiData?like_Converter(apiData.statistics.likeCount):155}</span>
     <span><img src= {dislike} alt='dislike'/>dislike</span>
     <span><img src= {share} alt='share'/>share</span>
     <span><img src= {save} alt='save'/>save</span>
    </div>
    </div>
    <hr/>
    <div className='publisher'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:"Loading..."}</p>
            <span>{channelData?subs_Converter(channelData.statistics.subscriberCount):"1M"}</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,265):"Placeholder desc"}</p>
        {/* <p>Sub for more trash content 🤓</p> */}
        <hr/>
        <h4>{apiData?(apiData.statistics.commentCount + ' Comments'):"0 Comments"}</h4>
        {commentData.map((item,index)=> {
        return(
            <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="your profile" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1m ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> {like_Converter(item.snippet.topLevelComment.snippet.likeCount)} </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        )}
        )}
    </div>
    </div>
  )
}

export default PlayVideo