import React from 'react';
import Search from './Search/Search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { searchYoutubeVideo } from './API/YouTube';

const App: React.FunctionComponent<any> = () => {
  const [videoState, setVideoState] = React.useState();
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const OnSearchSubmit = async (search: string) => {
    let videoListPromise = searchYoutubeVideo(search);
    let [video] = await Promise.all([videoListPromise]);
    setVideoState(video.data.items);
    setSelectedVideo(video.data.items[0]);
    return true;
  };

  const OnVideoSelect = (video: any) => {
    console.log('From the App!', video);
    video !== (null && undefined) && setSelectedVideo(video);
    return false;
  };

  React.useEffect(() => {
    OnSearchSubmit(' ');
  }, []);

  return (
    <div className="ui container">
      <Search callback={OnSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList OnVideoSelect={OnVideoSelect} videos={videoState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
