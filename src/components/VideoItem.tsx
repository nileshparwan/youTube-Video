import React from 'react';
import './videoItem.css';

const VideoItem: React.FunctionComponent<any> = ({ video, OnVideoSelect }) => {
  console.log(video);

  const Onselected = (e: React.SyntheticEvent) => {
    e.preventDefault();
    OnVideoSelect(video);
    return true;
  };

  return (
    <>
      {video &&
        video.snippet !== (null && undefined) &&
        video.snippet.title !== (null && undefined) &&
        video.snippet.channelTitle !== (null && undefined) && (
          <div className="video-item item" onClick={(e) => Onselected(e)}>
            <img
              className="ui image"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.channelTitle}
            />
            <div className="content">
              <p
                dangerouslySetInnerHTML={{ __html: `${video.snippet.title}` }}
              />
            </div>
          </div>
        )}
    </>
  );
};

export default VideoItem;
