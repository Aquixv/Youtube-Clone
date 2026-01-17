import React, { useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
const API_KEY = import.meta.env.VITE_API_KEY;
import { Value_Converter } from '../../../convert'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const Recommended = ({categoryId}) => {

    const [apiData, setapiData] = useState([])

    const fetchData = async (params) => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src= {thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail2} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail3} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail4} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail5} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail6} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail7} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src= {thumbnail8} alt="" />
            <div className="vid-info">
                <h4>Youtube from Temu</h4>
                <p>TemuBeast</p>
                <p>10k Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended