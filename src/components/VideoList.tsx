import React from 'react';
import VideoItem from './VideoItem';

const VideoList: React.FunctionComponent<any> = ({ videos, OnVideoSelect }) => {
  if (videos === (null || undefined)) return <></>;

  const renderList = videos.map((video: any, index: number) => {
    return (
      <VideoItem video={video} key={index} OnVideoSelect={OnVideoSelect} />
    );
  });

  return (
    <>
      {renderList !== (null && undefined) && (
        <div className="ui relaxed divided list">{renderList}</div>
      )}
    </>
  );
};

export default VideoList;
