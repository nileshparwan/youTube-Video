import React from 'react';

const VideoDetail: React.FunctionComponent<any> = ({ video }) => {
  return (
    <>
      {video !== (null && undefined) &&
      video.snippet !== (null && undefined) ? (
        <div>
          {video.videoId !== (null && undefined) && (
            <div className="ui embed">
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="video"
              ></iframe>
            </div>
          )}
          <div className="ui segment">
            {video.snippet.title !== (null && undefined) && (
              <h4
                className="ui header"
                dangerouslySetInnerHTML={{ __html: `${video.snippet.title}` }}
              />
            )}

            {video.snippet.description !== (null && undefined) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: `${video.snippet.description}`,
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default VideoDetail;
