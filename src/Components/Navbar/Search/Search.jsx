import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Search.css'

const API_KEY = import.meta.env.VITE_API_KEY;

const Search = () => {
  const { searchQuery } = useParams(); // Grabs the "tra rags" from the URL
  const [searchedVideos, setSearchedVideos] = useState([]);

  const fetchSearchResults = async () => {
    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${API_KEY}`;
    const res = await fetch(searchUrl);
    const data = await res.json();
    setSearchedVideos(data.items || []);
  }

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]); // Re-run if the user searches for something else!

  return (
    <div className='search-results'>
      {searchedVideos.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId || 0}/${item.id.videoId}`} key={index} className='search-card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className='search-info'>
            <h2>{item.snippet.title}</h2>
            <p className='channel-name'>{item.snippet.channelTitle}</p>
            {/* <p className='description'>{item.snippet.description}</p> */}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Search