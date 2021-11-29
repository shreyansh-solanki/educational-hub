/* eslint-disable no-sequences */
import React from 'react';

import MainCard from './MainCard';
import IMAGE_NOT_FOUND from '../../images/not_found_image.png';

const MainGrid = ({ data }) => {
  return (
    <>
      {data.items.map(item => (
        <MainCard
          key={item.snippet.channelId}
          id={item.id}
          name={item.snippet.channelTitle}
          publishedAt={item.snippet.publishedAt}
          image={
            item.snippet.thumbnails
              ? item.snippet.thumbnails.medium.url
              : IMAGE_NOT_FOUND
          }
          title={item.snippet.title}
          // description={item.snippet.description}
        />
      ))}
    </>
  );
};

export default MainGrid;
