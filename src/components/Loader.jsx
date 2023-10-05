import React from 'react';
import ContentLoader from './ContentLoader';

export default function Loader({children, countOfLoad}) {
  const contentLoaderItems = new Array(countOfLoad).fill(<ContentLoader/>);
  return <>
        {children || contentLoaderItems}
    </>
}
