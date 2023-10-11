import React from 'react';
import ContentLoader from './ContentLoader';

export default function Loader({children, countOfLoad, itemWidth = 0}) {
  const contentLoaderItems = new Array(countOfLoad)
    .fill(<ContentLoader itemWidth={itemWidth}/>);
  return <>
        {children || contentLoaderItems}
    </>
}
