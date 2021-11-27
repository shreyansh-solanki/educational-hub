import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/SearchCard.Style.css';

const SearchCard = ({ id, name, image, title, description }) => {
  const descriptionAsText = description
    ? `${description
        .split(' ')
        .slice(0, 10)
        .join(' ')
        .replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <div className="card">
      <div className="content">
        <Link to={`/videos?part=id%2Csnippet&id=${id}&key=/`}>
          <img src={image} alt="" />
          <div className="card-title">{title}</div>
        </Link>
        <div className="card-name">{name}</div>
        <p>{descriptionAsText}</p>
      </div>
    </div>
  );
};

export default SearchCard;
