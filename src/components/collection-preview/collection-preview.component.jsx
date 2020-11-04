import React from "react";

import "./collection-preview.styles.scss";
import Item from "../item/item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherItemProps }) => (
            <Item key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
