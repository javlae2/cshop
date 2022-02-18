import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, CollectionPreviewItemsContainer, CollectionPreviewTitle } from "./collection-preview.style";


const CollectionPreview = ({title, items, limit = 4}) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <CollectionPreviewItemsContainer>
            {items
                .filter((item,idx) => idx < limit)
                .map(( item ) => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;