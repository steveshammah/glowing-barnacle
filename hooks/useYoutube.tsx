import { useState, useEffect, useContext, useMemo, SetStateAction } from "react";
import content from '../assets/content.json';


interface useYoutubeProps {
    showName: string;
}

interface IchannelVideos {
[key: string]: any;
}

const useYoutube = ( showName: string) => {
  const [channelVideos, setChannelVideos] = useState<IchannelVideos>([]);
  console.log({showName})

  const data = useMemo(
    () =>
      content.items?.filter((video) => {
        const title = video.snippet.title.slice(0, 10);

        return title.includes(showName.slice(0, 6));
      }),
    [content.items, showName]
  );

  useEffect(() => {
    setChannelVideos(data);
  }, [data]);

  return {channelVideos};
};

export default useYoutube;