import React from 'react';

import { Link } from 'react-router-dom';
import VideoPlayer from '../../pages/VideoPlayer';
import '../../styles/MainCard.Style.css';

const MainCard = ({ id, name, publishedAt, image, title }) => {
  const textTitle = title
    ? `${title.split(' ').slice(0, 9).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <div className="container">
      <div className="main-card">
        <div className="main-content">
          <Link to={`/videos/${id}`}>
            <img src={image} alt="" />
            <div className="card-title">{textTitle}</div>
          </Link>
          <div className="card-name">{name}</div>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
