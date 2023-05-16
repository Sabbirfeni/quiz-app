import React, { useState } from "react";
import Video from "../video/Video";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import Error from "../Error/Error";
import Loader from '../../components/Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Videos() {
const [ page, setPage ] = useState(1)
const { loading, error, errorMessage, videos, hasMore } = useVideoList(page);
const data = {
  name: 'sabbir'
}
  return (
    <div>
        {loading ? <Loader/> : error ? <Error errorMessage={errorMessage}/> : videos.length === 0 ? <Error errorMessage='No data found!'/> : 
        <InfiniteScroll
          dataLength={videos.length} //This is important field to render the next data
          next={() => setPage(page + 8)}
          asMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video, index) => {
            return video.noq === 0 ? 
            <Video key={`${video.youtubeID}-${index}`} title={video.title} videoID={video.youtubeID} noq={video.noq}/>
            : 
            <Link to={`/quiz/${video.youtubeID}`}
                state={{videoTitle: video.title}}
                key={`${video.youtubeID}-${index}`}
              >
                <Video title={video.title} videoID={video.youtubeID} noq={video.noq}/>
              </Link>
          })}
        </InfiniteScroll>}
    </div>
  );
}
