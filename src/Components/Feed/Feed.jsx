import React, { useEffect } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const API_KEY = import.meta.env.VITE_API_KEY;
import { Value_Converter } from '../../../convert'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const fetchdata = async (pageToken = "") => {
    setIsLoading(true); // Start loading
    // ... your fetch logic ...
    setIsLoading(false); // Stop loading
}
const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const fetchdata = async (pageToken = "") => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&pageToken=${pageToken}&key=${API_KEY}`;
        
        const response = await fetch(videoList_url);
        const result = await response.json();

        // If pageToken is empty, it's a new category (replace data)
        // If pageToken exists, append the new items to the old list
        setData(prev => pageToken === "" ? result.items : [...prev, ...result.items]);
        
        // Store the token for the next 50 results
        setNextPageToken(result.nextPageToken || "");
    }

    // Reset and fetch when category changes
    useEffect(() => {
        setNextPageToken(""); // Clear token
        fetchdata(""); // Initial fetch for new category
    }, [category]);

    return (
        <>
            <div className='feed'>
                {data && data.map((item, index) => {
                    return (
                        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>
                                {Value_Converter(item.statistics.viewCount)} 
                                <span className="dot-separator">&bull;</span> 
                                {dayjs(item.snippet.publishedAt).fromNow()}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* Only show button if there is more data to fetch */}
{nextPageToken && (
    <div className="load-more-container">
        {isLoading ? (
            <p>Loading more videos...</p> 
        ) : (
            <button onClick={() => fetchdata(nextPageToken)} className="load-more-btn">
                Load More
            </button>
        )}
    </div>
)}
        </>
    );
}

export default Feed;