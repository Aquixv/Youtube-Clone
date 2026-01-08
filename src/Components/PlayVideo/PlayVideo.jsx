import React from 'react'
import './PlayVideo.css'
import Vagabond from '../../assets/Vagabond.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import Aquii from '../../assets/Aquii.jpeg'
const PlayVideo = () => {
  return (
    <div className='play-video'>
     <video src= {Vagabond} controls autoPlay muted></video>
     <h3> Fodder Post</h3>
     <div className="play-video-info">
        <p> 1525 views• 2 days ago</p>
     <div>
     <span><img src= {like} alt='like'/>like</span>
     <span><img src= {dislike} alt='dislike'/>dislike</span>
     <span><img src= {share} alt='share'/>share</span>
     <span><img src= {save} alt='save'/>save</span>
    </div>
    </div>
    <hr/>
    <div className='publisher'>
        <img src={Aquii} alt="" />
        <div>
            <p>AquiXv</p>
            <span>200 subscribers</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className="vid-description">
        {/* <p>Posting to post 🙃</p> */}
        <p>Sub for more trash content 🤓</p>
        <hr/>
        <h4> 5 comments</h4>
        <div className="comment">
            <img src={user_profile} alt="your profile" />
            <div>
                <h3>MiniXv<span>1m ago</span></h3>
                <p>Unfinished in the big 26 🥀</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> 244 </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="your profile" />
            <div>
                <h3>MiniXv<span>1h ago</span></h3>
                <p>Unfinished in the big 26 🥀</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> 244 </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="your profile" />
            <div>
                <h3>MiniXv<span>1d ago</span></h3>
                <p>Unfinished in the big 26 🥀</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> 244 </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="your profile" />
            <div>
                <h3>MiniXv<span>2d ago</span></h3>
                <p>Unfinished in the big 26 🥀</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> 244 </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="your profile" />
            <div>
                <h3>MiniXv<span>1 day ago</span></h3>
                <p>Unfinished in the big 26 🥀</p>
                <div className="comment-section">
                    <img src={like} alt="" />
                    <span> 244 </span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PlayVideo