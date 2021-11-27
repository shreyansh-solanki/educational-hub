import React from 'react';
import SearchCard from './SearchCard';

import IMAGE_NOT_FOUND from '../../images/not_found_image.png';

const Search = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <SearchCard
          key={item.snippet.channelId}
          id={item.id.videoId}
          name={item.snippet.channelTitle}
          image={
            item.snippet.thumbnails
              ? item.snippet.thumbnails.medium.url
              : IMAGE_NOT_FOUND
          }
          title={item.snippet.title}
          description={item.snippet.description}
        />
      ))}
    </div>
  );
};

export default Search;
