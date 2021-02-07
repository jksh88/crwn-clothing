import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  console.log('SIZE :', size);
  console.log('MATCH: ', match);
  console.log('TITLE: ', title);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

//with withRouter, I can get all match, history, location props available the upper-level components which are rendered from BroswerRouter
//In this case, <HomePage> component is rendered by BroswerRouter. I could have done the same separately with useParams, useHitory, or useLocation hooks as well.
export default withRouter(MenuItem);
