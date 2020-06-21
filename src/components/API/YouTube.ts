import Axios from 'axios';

const KEY = 'AIzaSyAj3bbWdpGQl_6VhwedbTGHEkE60IXmr58';

const PARAMS = {
  part: 'snippet',
  maxResults: 5,
  key: `${KEY}`,
};

const Youtube = Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export const searchYoutubeVideo = async (search: any): Promise<any> => {
  return await Youtube.get('/search', {
    params: {
      ...PARAMS,
      q: `${search}`,
    },
  });
};
