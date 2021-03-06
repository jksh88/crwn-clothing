import React from 'react';
import './item.styles.scss';

const Item = ({ id, name, imageUrl, price }) => (
  <div className="item">
    <img className="image" src={`${imageUrl}`} alt="item image" />
    <div className="item-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default Item;
