import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.style.scss';

const CollectionPreview = ({title, items, limit = 4}) => (
    <div className="collection-preview">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="preview">
            {items
                .filter((item,idx) => idx < limit)
                .map(( item ) => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;